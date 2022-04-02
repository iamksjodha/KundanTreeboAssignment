import {
  SONGLIST_SUCCESS,
  SONGLIST_FAIL,
  SETLIST_SUCCESS,
  ON_SUBMIT,
} from '../action/type';

const initialState = {
  loading: false,
  songList: [],
  songDetails: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ON_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case SONGLIST_SUCCESS:
      return {
        ...state,
        ...payload,
        songList: payload,
        loading: false,
      };
    case SONGLIST_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case SETLIST_SUCCESS:
      return {
        ...state,
        ...payload,
        songDetails: payload,
      };

    default:
      return state;
  }
}
