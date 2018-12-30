import React, { Component } from 'react';

class AlbumDetailRight extends Component {
  //
  state = {
    showIcons: false,
    showMenu: false,
    play: false
  };
  //
  //
  handlePlaySong = () => {
    const play = this.state.play;
    this.setState({ play: !play });
  };
  //
  handleShowIcons = () => {
    const showIcons = this.state.showIcons;
    this.setState({ showIcons: !showIcons });
  };
  //
  handleShowMenu = () => {
    if (!this.state.showMenu) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };
  //
  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleShowMenu();
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
          onMouseEnter={this.handleShowIcons}
          onMouseLeave={this.handleShowIcons}
        >
          <div className="mr-auto">
            <div className="d-flex">
              <div className="mr-4">
                {!this.state.showIcons ? (
                  <i className="fas fa-music" style={{ color: '#1db954' }} />
                ) : !this.state.play ? (
                  <i
                    className="fas fa-play"
                    style={{ color: '#1db954' }}
                    onClick={this.handlePlaySong}
                  />
                ) : (
                  <i
                    className="fas fa-pause"
                    style={{ color: '#1db954' }}
                    onClick={this.handlePlaySong}
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
              {!this.state.showIcons ? null : (
                <i
                  className="fas fa-ellipsis-h"
                  onClick={this.handleShowMenu}
                />
              )}
            </div>
            <div style={{ color: '#1db954' }}>{this.props.songDuration}</div>
          </div>
        </div>
        {!this.state.showMenu ? null : (
          <ul
            id="menu"
            className="list-group"
            style={{
              backgroundColor: '#23232c',
              zIndex: 1,
              position: 'absolute',
              right: 95,
              top: 20
            }}
          >
            <li
              className="list-group-item"
              style={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              Start Radio
            </li>
            <li
              className="list-group-item"
              style={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              Save to your Library
            </li>
            <li
              className="list-group-item"
              style={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              Add to Queue
            </li>
            <li
              className="list-group-item"
              style={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              Add to Playlist
            </li>
            <li
              className="list-group-item"
              style={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              Copy Song Link
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default AlbumDetailRight;
