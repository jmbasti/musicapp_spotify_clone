import React, { Component } from 'react';
// MOMENT
import moment from 'moment';
// REACT-REDUX
import { connect } from 'react-redux';
import { fetchAlbumSongs } from '../../actions/index';
//
import SongDetailLeft from './SongDetailLeft';
import SongDetailRight from './SongDetailRight';

class SongDetail extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchAlbumSongs(id);
  };

  render() {
    if (!this.props.songs.album) {
      return <div>Loading...</div>;
    }

    // console.log(this.props.songs.artists);
    const year = this.props.songs.album.release_date.split('-').slice(0, 1);
    // DURATION
    const duration = this.props.songs.duration_ms;
    const tempTime = moment.duration(duration);
    // const songDuration = `${tempTime.minutes()}:${tempTime.seconds()}`;
    const songDuration =
      tempTime.seconds() < 10
        ? `${tempTime.minutes()}:0${tempTime.seconds()}`
        : `${tempTime.minutes()}:${tempTime.seconds()}`;

    return (
      <div
        className="row animated bounceInDown"
        style={{
          marginTop: '100px'
        }}
      >
        <div className="col-md-4">
          <SongDetailLeft
            image={this.props.songs.album.images[0].url}
            title={this.props.songs.name}
            artist={this.props.songs.album.artists[0].name}
            trackNumber={this.props.songs.album.total_tracks}
            year={year}
          />
        </div>
        <div className="col-md-8">
          <SongDetailRight
            songDuration={songDuration}
            title={this.props.songs.name}
            artists={this.props.songs.artists}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(state.songs);
  return { songs: state.songs };
};
export default connect(
  mapStateToProps,
  { fetchAlbumSongs: fetchAlbumSongs }
)(SongDetail);
