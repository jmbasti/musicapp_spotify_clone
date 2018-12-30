// REDUX
import { combineReducers } from 'redux';
import SongsReducer from './SongsReducer';
import UIReducers from './UIReducers';

// REDUCERS

export default combineReducers({
  songs: SongsReducer,
  ui: UIReducers
});
