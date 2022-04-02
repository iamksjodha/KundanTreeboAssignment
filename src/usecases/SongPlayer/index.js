import React from 'react';
import {useSelector} from 'react-redux';

import SongPlayerScreen from '../../entities/SongPlayerScreen';

const SongPlayer = ({navigation}) => {
  const songDetails = useSelector(state => state.songs.songDetails);

  return <SongPlayerScreen songDetails={songDetails} />;
};

export default SongPlayer;
