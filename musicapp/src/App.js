import React, { Component } from 'react';
import './App.css';
// REACT-ROUTER
import { Route, Switch } from 'react-router-dom';
// COMPONENTS
import SideBar from './components/SideBar/SideBar';
import NowPlaying from './components/NowPlaying/NowPlaying';
import SearchBar from './components/SearchBar/SearchBar';
import SongList from './components/SongList/SongList';
import NewRelease from './components/NewRelease/NewRelease';
import SongDetail from './components/SongDetail/SongDetail';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>

          <div className="col-md-10">
            <SearchBar />
            {/* <SongList /> */}
            <Switch>
              <Route path="/" exact component={NewRelease} />
              <Route path="/search" exact component={SongList} />
              <Route path="/new-release/:id" exact component={SongDetail} />
              <Route path="/search/:id" exact component={SongDetail} />
            </Switch>
          </div>
        </div>
        <NowPlaying />
      </div>
    );
  }
}

export default App;
