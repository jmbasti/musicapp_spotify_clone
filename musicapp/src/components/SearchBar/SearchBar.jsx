import React, { Component } from 'react';
// REACT-REDUX
import { connect } from 'react-redux';
// ACTION
import { fetchSongs } from '../../actions/index';
// REACT-ROUTER
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  state = {
    term: ''
  };

  handleChange = e => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchSongs(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light topbar">
        <div className="navbar-collapse">
          <form onSubmit={this.handleSubmit} className="mr-auto  my-2 my-lg-0">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                value={this.state.term}
                onChange={this.handleChange}
                placeholder="Search for artists"
              />
              <div className="input-group-append">
                <Link
                  to="/search"
                  className="btn btn-sm text-center"
                  type="submit"
                  style={{
                    backgroundColor: '#1db954',
                    color: '#fff'
                  }}
                >
                  Search
                </Link>
              </div>
            </div>
          </form>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { fetchSongs: fetchSongs }
)(SearchBar);
