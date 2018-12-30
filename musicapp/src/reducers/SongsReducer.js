import {
  FETCH_SONGS,
  FETCH_SONG,
  NEW_RELEASE,
  FETCH_ALBUM_SONGS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return action.payload;
    case FETCH_SONG:
      return action.payload;
    case NEW_RELEASE:
      return action.payload;
    case FETCH_ALBUM_SONGS:
      return action.payload;
    default:
      return state;
  }
};
