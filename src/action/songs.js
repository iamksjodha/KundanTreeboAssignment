import {ToastAndroid} from 'react-native';

import {
  SONGLIST_SUCCESS,
  SONGLIST_FAIL,
  ON_SUBMIT,
  SETLIST_SUCCESS,
} from './type';
import {ApiConfig} from '../api/apiConfig/ApiConfig';
import {ApiCallGet} from '../api/apiConfig/ApiCall';
import Strings from '../constants/strings';

//get song list from api
export const getSongList = searchText => async dispatch => {
  dispatch({type: ON_SUBMIT});
  const {baseUrl, search} = ApiConfig;

  const url = baseUrl + search + searchText;

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await ApiCallGet(url, headers);
    if (res.results) {
      dispatch({
        type: SONGLIST_SUCCESS,
        payload: res.results,
      });
    } else {
      dispatch({type: SONGLIST_FAIL});
      ToastAndroid.showWithGravity(
        Strings.NO_DATA_MESSAGE,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  } catch (err) {
    dispatch({type: SONGLIST_FAIL});
    if (err.message === 'Network Error') {
      ToastAndroid.showWithGravity(
        Strings.NETWORK_ERROR_MESSAGE,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    } else {
      ToastAndroid.showWithGravity(
        err.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  }
};

//get song details from song list data
export const getSongData = data => async dispatch => {
  dispatch({
    type: SETLIST_SUCCESS,
    payload: data,
  });
};
