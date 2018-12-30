import React, { Component } from 'react';
// REACT-REDUX
import { connect } from 'react-redux';
// REACT-ROUTER
import { Link } from 'react-router-dom';
//
import { fetchSong } from '../../actions/index';

class SongList extends Component {
  //
  handleSelectSong = id => {
    this.props.fetchSong(id);
    // console.log(id);
  };
  //
  render() {
    if (!this.props.songs.tracks) {
      return null;
    }
    // console.log(this.props.songs.tracks);
    const songlist = this.props.songs.tracks.map(song => {
      return (
        <div className="col-md-3 animated zoomIn" key={song.external_ids.isrc}>
          <div
            className="card mb-5 mx-auto"
            style={{ border: 'none', width: '15rem' }}
          >
            <img
              className="card-img-top card-img-bottom mb-3"
              src={song.album.images[0].url}
              alt={song.album.images[0].url}
              style={{
                boxShadow:
                  '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'
              }}
            />
            <div className="card-body p-0">
              <Link
                to={`/search/${song.id}`}
                className="card-title mb-0"
                style={{ color: '#32323d', cursor: 'pointer' }}
                onClick={() => this.handleSelectSong(song.id)}
              >
                {song.name}
              </Link>
              <br />
              <small className="card-text" style={{ color: '#72727d' }}>
                {song.album.name}
              </small>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row margin ">{songlist}</div>;
  }
}
const mapStateToProps = state => {
  return { songs: state.songs };
};
export default connect(
  mapStateToProps,
  { fetchSong: fetchSong }
)(SongList);
