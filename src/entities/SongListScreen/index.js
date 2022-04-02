import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import Container from '../../customComponent/Container';
import CustomSearchBar from '../../customComponent/CustomSearchBar';
import Strings from '../../constants/strings';
import styles from './styles';

const SongListScreen = props => {
  const {handleSearch, isLoading, songList, handleSelectSong} = props;

  return (
    <View style={styles.viewContainer}>
      <Container>
        <Text style={styles.labelText}>{Strings.SONG_LIST_TITLE}</Text>
        <CustomSearchBar
          spinnerVisibility={isLoading}
          onChangeText={text => handleSearch(text)}
          onClearPress={() => handleSearch('')}
          placeholder={Strings.SEARCH_PLACEHOLDER}
        />
        <FlatList
          data={songList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.songContainer}
              onPress={() => handleSelectSong(item)}>
              <FastImage
                resizeMode={FastImage.resizeMode.contain}
                style={styles.iconStyle}
                source={{uri: item?.artworkUrl100}}
              />
              <View style={styles.songDetailsContain}>
                <Text style={styles.songText}>{item?.trackName}</Text>
                <Text style={styles.songAlbumText}>{item?.artistName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Container>
    </View>
  );
};

SongListScreen.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleSelectSong: PropTypes.func.isRequired,
  songList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

SongListScreen.defaultProp = {
  handleSearch: () => {},
  handleSelectSong: () => {},
  songList: [],
  isLoading: false,
};

export default SongListScreen;
