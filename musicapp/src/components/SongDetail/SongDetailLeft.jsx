import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlayButton } from '../../actions/index';

class SongDetailLeft extends Component {
  //
  audio = new Audio();
  //
  toggleButton = () => {
    this.props.togglePlayButton();
    this.audio.src = this.props.songs.preview_url;
    if (!this.props.ui.play) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  };
  //
  render() {
    return (
      <div className="card mx-auto" style={{ width: '20rem', border: 'none' }}>
        <img
          src={this.props.image}
          className=""
          alt="..."
          style={{
            width: '100%',
            height: '300px',
            boxShadow:
              '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'
          }}
        />
        <div className="card-body">
          <h5
            className="card-title text-center"
            style={{ color: '#32323d', cursor: 'pointer' }}
          >
            {this.props.title}
          </h5>
          <p className="card-text text-center" style={{ color: '#72727d' }}>
            {this.props.artist}
          </p>
          <button
            className="btn mx-auto text-center d-block w-50"
            style={{
              backgroundColor: '#1db954',
              color: '#fff',
              borderRadius: '30px'
            }}
            onClick={this.toggleButton}
          >
            {!this.props.ui.play ? 'Play' : 'Pause'}
          </button>

          <p className="text-center mt-2" style={{ fontSize: '12px' }}>
            {this.props.year} &nbsp; &bull; &nbsp;
            {this.props.trackNumber}{' '}
            {this.props.trackNumber > 1 ? 'SONGS' : 'SONG'}
          </p>
          <small />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { songs: state.songs, ui: state.ui };
};
export default connect(
  mapStateToProps,
  { togglePlayButton }
)(SongDetailLeft);
