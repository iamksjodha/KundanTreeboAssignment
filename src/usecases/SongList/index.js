import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TrackPlayer from 'react-native-track-player';

import SongListScreen from '../../entities/SongListScreen';
import {getSongList, getSongData} from '../../action/songs';

const SongList = ({navigation}) => {
  const isLoading = useSelector(state => state.songs.loading);
  const songList = useSelector(state => state.songs.songList);
  const dispatch = useDispatch();

  const handleSearch = searchText => {
    dispatch(getSongList(searchText));
  };

  const handleSelectSong = async songData => {
    dispatch(getSongData(songData));
    await TrackPlayer.reset();
    navigation.navigate('SongPlayer');
  };

  return (
    <SongListScreen
      handleSearch={handleSearch}
      isLoading={isLoading}
      songList={songList}
      handleSelectSong={handleSelectSong}
    />
  );
};

export default SongList;
