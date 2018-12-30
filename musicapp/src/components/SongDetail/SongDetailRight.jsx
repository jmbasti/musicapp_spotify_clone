import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlayButton, showPopMenu, showIcons } from '../../actions/index';
//
import SongDetailRightMenu from './SongDetailRightMenu';

class SongDetailRight extends Component {
  //
  audio = new Audio();
  //
  hoverIcons = () => {
    this.props.showIcons();
  };
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
  toggleMenu = () => {
    if (!this.props.ui.menu) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.props.showPopMenu();
  };
  //
  handleShowIcons = () => {
    const showIcons = this.state.showIcons;
    this.setState({ showIcons: !showIcons });
  };
  //
  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.toggleMenu();
  };
  //
  render() {
    // console.log(this.props.artists);
    return (
      <div
        ref={node => {
          this.node = node;
        }}
      >
        <div
          className="d-flex mx-auto hover p-2"
          onMouseEnter={this.hoverIcons}
          onMouseLeave={this.hoverIcons}
        >
          <div className="mr-auto">
            <div className="d-flex">
              <div className="mr-4">
                {!this.props.ui.hover ? (
                  <i className="fas fa-music" style={{ color: '#1db954' }} />
                ) : !this.props.ui.play ? (
                  <i
                    className="fas fa-play"
                    style={{ color: '#1db954' }}
                    onClick={this.toggleButton}
                  />
                ) : (
                  <i
                    className="fas fa-pause"
                    style={{ color: '#1db954' }}
                    onClick={this.toggleButton}
                  />
                )}
              </div>
              <div>
                <p
                  className="mb-0"
                  style={{ color: '#1db954', fontWeight: 'bold' }}
                >
                  {this.props.title}
                </p>
                <small>
                  {this.props.artists.length === 2
                    ? this.props.artists[1].name
                    : this.props.artists[0].name}
                </small>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div className="mr-4">
              {!this.props.ui.hover ? null : (
                <i className="fas fa-ellipsis-h" onClick={this.toggleMenu} />
              )}
            </div>
            <div style={{ color: '#1db954' }}>{this.props.songDuration}</div>
          </div>
        </div>
        {!this.props.ui.menu ? null : <SongDetailRightMenu />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { songs: state.songs, ui: state.ui };
};
export default connect(
  mapStateToProps,
  { togglePlayButton, showPopMenu, showIcons }
)(SongDetailRight);
