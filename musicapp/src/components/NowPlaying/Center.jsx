import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlayButton, shuffle, repeat } from '../../actions/index';

class Center extends Component {
  //
  audio = new Audio();

  toggleButton = () => {
    this.props.togglePlayButton();
    this.audio.src = this.props.songs.preview_url;
    console.log(this.props.songs.preview_url);
    if (!this.props.ui.play) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  };

  toggleShuffle = () => {
    this.props.shuffle();
  };
  toggleRepeat = () => {
    this.props.repeat();
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="d-flex justify-content-around align-items-center mx-auto w-25">
          <div>
            {this.props.ui.shuffle ? (
              <i
                className="fas fa-random"
                style={{ color: '#1db954' }}
                onClick={this.toggleShuffle}
              />
            ) : (
              <i className="fas fa-random" onClick={this.toggleShuffle} />
            )}
          </div>
          <div>
            <i className="fas fa-step-backward" />
          </div>
          <div>
            {!this.props.ui.play ? (
              <i
                className="far fa-play-circle"
                style={{ fontSize: '35px' }}
                onClick={this.toggleButton}
              />
            ) : (
              <i
                className="far fa-pause-circle"
                style={{ fontSize: '35px' }}
                onClick={this.toggleButton}
              />
            )}

            {/* <button onClick={this.toggleButton}>Toggle</button>
            {this.props.playSong.play ? <div>TEST</div> : null} */}
          </div>
          <div>
            <i className="fas fa-step-forward" />
          </div>
          <div>
            {this.props.ui.repeat ? (
              <i
                className="fas fa-redo-alt"
                style={{ color: '#1db954' }}
                onClick={this.toggleRepeat}
              />
            ) : (
              <i className="fas fa-redo-alt" onClick={this.toggleRepeat} />
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div>0:00</div>

          <div
            className="progress mx-3"
            style={{ height: '0.25rem', width: '100%' }}
          >
            <div
              style={{ width: '50%' }}
              className="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>

          <div>{this.props.songDuration}</div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { songs: state.songs, ui: state.ui };
};

export default connect(
  mapStateToProps,
  { togglePlayButton, shuffle, repeat }
)(Center);
