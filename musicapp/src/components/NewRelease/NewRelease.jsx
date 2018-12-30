import React, { Component } from 'react';
// REACT-REDUX
import { connect } from 'react-redux';
//
// REACT-ROUTER
import { Link } from 'react-router-dom';

import { newRelease, fetchAlbumSongs } from '../../actions/index';

class NewRelease extends Component {
  componentDidMount = () => {
    this.props.newRelease();
  };
  //
  handleSelectAlbumSong = id => {
    console.log(id);
    this.props.fetchAlbumSongs(id);
  };
  //

  render() {
    if (!this.props.songs.albums) {
      return null;
    }
    // console.log(this.props.songs.albums.items);

    const newAlbums = this.props.songs.albums.items.map(album => {
      return (
        <div className="col-md-3 animated zoomIn" key={album.uri}>
          <div
            className="card my-3 mx-auto"
            style={{ border: 'none', width: '15rem' }}
          >
            <img
              src={album.images[0].url}
              className="card-img-top card-img-bottom mb-3"
              alt={album.images[0].url}
              style={{
                boxShadow:
                  '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'
              }}
            />
            <div className="card-body p-0">
              {/* <p
                className="card-title mb-0"
                style={{ color: '#32323d', cursor: 'pointer' }}
                onClick={() => this.handleSelectAlbumSong(album.id)}
              >
                {album.name}
              </p> */}

              <Link
                to={`/new-release/${album.id}`}
                className="card-title mb-0"
                style={{ color: '#32323d', cursor: 'pointer' }}
              >
                {album.name}
              </Link>
              <br />
              <small className="card-text" style={{ color: '#72727d' }}>
                {album.artists[0].name}
              </small>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row mt-5">{newAlbums}</div>;
  }
}
const mapStateToProps = state => {
  return { songs: state.songs };
};
export default connect(
  mapStateToProps,
  { newRelease: newRelease, fetchAlbumSongs: fetchAlbumSongs }
)(NewRelease);
