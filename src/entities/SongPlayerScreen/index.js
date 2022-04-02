/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  State,
  useProgress,
} from 'react-native-track-player';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../commonStyleSheet/Color';
import Container from '../../customComponent/Container';
import Header from '../../customComponent/Header';
import Strings from '../../constants/strings';

import Forward from '../../../assets/images/forward.png';
import Pause from '../../../assets/images/pause.png';
import Play from '../../../assets/images/play.png';
import Replay from '../../../assets/images/replay.png';

const SongPlayerScreen = props => {
  const { songDetails } = props;

  const [playPause, setPlayPause] = useState('Play');

  //the value of the slider should be between 0 and 1
  const [sliderValue, setSliderValue] = useState(0);

  //flag to check whether the use is sliding the seekbar or not
  const [isSeeking, setIsSeeking] = useState(false);

  const progress = useProgress();
  console.log(progress, 'progress');
  const { duration, position } = progress;

  useEffect(() => {
    onPlayMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPlayMusic = async () => {
    const track = {
      id: '1',
      url: require('../../../assets/song/Kalimbas.mp3'), // Load media from the app bundle
      title: songDetails?.trackName,
      artist: songDetails?.artistName,
      artwork: songDetails?.artworkUrl100,
    };
    await TrackPlayer.add(track);
    await TrackPlayer.play();
  };

  //this hook updates the value of the slider whenever the current position of the song changes
  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  //this function is called when the user starts to slide the seekbar
  const slidingStarted = () => {
    setIsSeeking(true);
  };

  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  //for play and pause song
  const onPlayPausePress = async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Playing) {
      TrackPlayer.pause();
      setPlayPause('Pause');
    }

    if (state === State.Paused) {
      TrackPlayer.play();
      setPlayPause('Play');
    }
  };

  //for update the seek
  const changeSeek = async (dur) => {
    await TrackPlayer.seekTo(Math.round(position) + dur);
  };

  return (
     <View style={styles.viewContainer}>

      <Header enableBack headerText={songDetails?.trackName}/>

      <Container>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.songImage}
              source={{ uri: songDetails?.artworkUrl100 }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <Text style={styles.songDetailsText}>{songDetails?.trackName}</Text>
          <Text style={styles.artistText}>{songDetails?.artistName}</Text>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={sliderValue}
            style={styles.slider}
            onSlidingStart={slidingStarted}
            onSlidingComplete={slidingCompleted}
            minimumTrackTintColor={colors.themeColor}
            maximumTrackTintColor={colors.borderBottomColor}
            thumbTintColor={colors.themeColor}
          />
          <View style={styles.songDurationStyle}>
          <Text style={styles.artistText}>{moment('2000-01-01 00:00:00').seconds(position).format('mm:ss')}</Text>
          <Text style={styles.artistText}>{moment('2000-01-01 00:00:00').seconds(duration).format('mm:ss')}</Text>
          </View>
          <View style={styles.playerContainer}>
            <TouchableOpacity
              style={styles.playerContain}
              onPress={() => changeSeek(Strings.SEEK_BACKWORD_TIME)}>
              <FastImage
                style={styles.buttonIcon}
                source={Replay}
              />
            </TouchableOpacity>
            {playPause === 'Play' ? (
              <TouchableOpacity
                style={styles.playerContain}
                onPress={onPlayPausePress}>
                <FastImage
                  style={styles.playerButton}
                  source={Pause}
                />
              </TouchableOpacity>
            ) : null}
            {playPause === 'Pause' ? (
              <TouchableOpacity
                style={styles.playerContain}
                onPress={onPlayPausePress}>
                <FastImage
                  style={styles.buttonIcon}
                  source={Play}
                />
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              style={styles.playerContain}
              onPress={() => changeSeek(Strings.SEEK_FORWARD_TIME)}>
              <FastImage
                style={styles.buttonIcon}
                source={Forward}
              />
            </TouchableOpacity>
          </View>
        </View>
        </Container>
      </View>
  );
};

SongPlayerScreen.propTypes = {
  songDetails: PropTypes.object.isRequired,
};

SongPlayerScreen.defaultProp = {
  songDetails: {},
};

export default SongPlayerScreen;
