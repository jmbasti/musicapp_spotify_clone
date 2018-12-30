import React, { Component } from 'react';
// REACT-ROUTER
import { Link } from 'react-router-dom';
//
import logo from '../../img/Spotify.png';

class SideBar extends Component {
  render() {
    const style = {
      height: '50px',
      width: 'auto'
    };

    const link = {
      border: 'none',
      color: 'rgb(209, 209, 209)',
      backgroundColor: '#23232c'
    };

    return (
      <div className="mx-auto pt-3 px-3 sidebar">
        <img
          src={logo}
          alt={logo}
          style={style}
          className="img-fluid mx-auto d-block mb-3"
        />
        <ul className="list-group">
          <Link to="/" className="list-group-item" style={link}>
            Home
          </Link>
          <Link to="/explore" className="list-group-item" style={link}>
            Explore
          </Link>
          <Link to="/hearthis" className="list-group-item" style={link}>
            Hear This
          </Link>
        </ul>
        <hr />
        <h5 className="text-center text-white">My Music</h5>
        <ul className="list-group">
          <Link to="/favourites" className="list-group-item" style={link}>
            <i className="fas fa-heart" /> Favourite tracks
          </Link>
          <Link to="/playlists" className="list-group-item" style={link}>
            <i className="fas fa-music" /> Playlists
          </Link>
          <Link to="/albums" className="list-group-item" style={link}>
            <i className="fas fa-compact-disc" /> Albums
          </Link>
          <Link to="/apps" className="list-group-item" style={link}>
            <i className="fas fa-box-open" /> Apps
          </Link>
        </ul>
      </div>
    );
  }
}

export default SideBar;
