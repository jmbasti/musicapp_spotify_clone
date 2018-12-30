import React, { Component } from 'react';
// MOMENT
import moment from 'moment';
// REACT-REDUX
import { connect } from 'react-redux';
//
import { fetchSong } from '../../actions/index';
//
import Left from './Left';
import Center from './Center';
import Right from './Right';

class NowPlaying extends Component {
  render() {
    // console.log(this.props.songs);
    if (!this.props.songs.album) {
      return null;
    }
    // DURATION
    const duration = this.props.songs.duration_ms;
    const tempTime = moment.duration(duration);
    // const songDuration = `${tempTime.minutes()}:${tempTime.seconds()}`;
    const songDuration =
      tempTime.seconds() < 10
        ? `${tempTime.minutes()}:0${tempTime.seconds()}`
        : `${tempTime.minutes()}:${tempTime.seconds()}`;

    return (
      <div className="row bottom animated fadeInUp">
        <div className="col-md-2">
          <Left
            name={this.props.songs.name}
            image={this.props.songs.album.images[0].url}
            artist={this.props.songs.album.artists[0].name}
          />
        </div>
        <div className="col-md-8 my-auto">
          <Center songDuration={songDuration} />
        </div>
        <div className="col-md-2">
          <Right />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.songs);
  return { songs: state.songs };
};
export default connect(
  mapStateToProps,
  { fetchSong: fetchSong }
)(NowPlaying);
