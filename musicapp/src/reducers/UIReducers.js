import {
  PLAY_SONG,
  MUTE_SONG,
  SHOW_POPMENU,
  HOVER_ICONS,
  SHUFFLE,
  REPEAT
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return Object.assign({}, state, {
        play: !state.play
      });
    case MUTE_SONG:
      return Object.assign({}, state, {
        mute: !state.mute
      });
    case SHOW_POPMENU:
      return Object.assign({}, state, {
        menu: !state.menu
      });
    case HOVER_ICONS:
      return Object.assign({}, state, {
        hover: !state.hover
      });
    case SHUFFLE:
      return Object.assign({}, state, {
        shuffle: !state.shuffle
      });
    case REPEAT:
      return Object.assign({}, state, {
        repeat: !state.repeat
      });

    default:
      return state;
  }
};
