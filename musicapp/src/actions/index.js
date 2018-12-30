import axios from 'axios';
import {
  FETCH_SONGS,
  FETCH_SONG,
  NEW_RELEASE,
  FETCH_ALBUM_SONGS,
  PLAY_SONG,
  MUTE_SONG,
  SHOW_POPMENU,
  HOVER_ICONS,
  SHUFFLE,
  REPEAT
} from './types';
// CUSTOM HISTORY
import history from '../history';

const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

//
// AUTH TOKEN TO BE CHANGED EVERY HOUR!!!!
const auth_token =
  'Bearer BQB1IJI7fCmoKkhpaQ1w9Jk8Ax_UETA6J-YizxVf520kyNIKcghvZEvJWe9gTjcRkfowEXEk6z6N8X35gGUVqsoog2bk7LyS1x09Izpn2RYJ-sVRorK81g6zgbWPGLwnjo0F7rOI6ubJLjLj_JeKEF61X-BVTrNytg';

// NEW RELEASES
export const newRelease = () => {
  // REDUX-THUNK
  return async dispatch => {
    const response = await axios.get(
      `https://api.spotify.com/v1/browse/new-releases?country=PH`,
      {
        headers: {
          Authorization: auth_token
        }
      }
    );

    // console.log(response.data);
    dispatch({ type: NEW_RELEASE, payload: response.data });
  };
};
// FETCH SONGS
export const fetchSongs = term => {
  // REDUX THUNK
  return async dispatch => {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${term}&type=artist,album&limit=1`,
      {
        headers: {
          Authorization: auth_token
        }
      }
    );

    // console.log(response);

    const artist = response.data.artists.items[0];
    const newResponse = await axios.get(
      `${ALBUM_URL}${artist.id}/top-tracks?country=US&`,
      {
        headers: {
          Authorization: auth_token
        }
      }
    );

    // console.log(newResponse);

    dispatch({
      type: FETCH_SONGS,
      payload: newResponse.data
    });
    history.push('/search');
  };
};

// FETCH SONG
export const fetchSong = id => {
  // REDUX-THUNK
  return async dispatch => {
    const response = await axios.get(
      `https://api.spotify.com/v1/tracks/${id}`,
      {
        headers: {
          Authorization: auth_token
        }
      }
    );

    // console.log(response.data);
    dispatch({ type: FETCH_SONG, payload: response.data });
  };
};

// FETCH ALBUM SONGS
export const fetchAlbumSongs = id => {
  // REDUX-THUNK
  return async dispatch => {
    const response = await axios.get(
      `https://api.spotify.com/v1/albums/${id}/tracks`,
      {
        headers: {
          Authorization: auth_token
        }
      }
    );

    // console.log(response.data);

    const albumSongId = response.data.items[0].id;

    // console.log(albumSongId);

    const newResponse = await axios.get(
      `https://api.spotify.com/v1/tracks/${albumSongId}`,
      {
        headers: {
          Authorization: auth_token
        }
      }
    );
    // console.log(newResponse.data);
    dispatch({ type: FETCH_ALBUM_SONGS, payload: newResponse.data });
  };
};

// PLAY SONG
export const togglePlayButton = () => {
  return { type: PLAY_SONG };
};
// MUTE SONG
export const toggleMuteButton = () => {
  return { type: MUTE_SONG };
};
// SHOW POPMENU
export const showPopMenu = () => {
  return { type: SHOW_POPMENU };
};
// SHOW ICONS ON HOVER
export const showIcons = () => {
  return { type: HOVER_ICONS };
};
// SHUFFLE
export const shuffle = () => {
  return { type: SHUFFLE };
};
// REPEAT
export const repeat = () => {
  return { type: REPEAT };
};
