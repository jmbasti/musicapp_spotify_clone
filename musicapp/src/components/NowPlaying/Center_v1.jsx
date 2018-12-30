import React, { Component } from 'react';

class Center extends Component {
  state = {
    play: false
  };
  //
  handlePlaySong = () => {
    const play = this.state.play;
    this.setState({ play: !play });
  };
  //
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-around align-items-center mx-auto w-25">
          <div>
            <i className="fas fa-random" />
          </div>
          <div>
            <i className="fas fa-step-backward" />
          </div>
          <div>
            {!this.state.play ? (
              <i
                className="far fa-play-circle"
                style={{ fontSize: '35px' }}
                onClick={this.handlePlaySong}
              />
            ) : (
              <i
                className="far fa-pause-circle"
                style={{ fontSize: '35px' }}
                onClick={this.handlePlaySong}
              />
            )}
          </div>
          <div>
            <i className="fas fa-step-forward" />
          </div>
          <div>
            <i className="fas fa-redo-alt" />
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

export default Center;
