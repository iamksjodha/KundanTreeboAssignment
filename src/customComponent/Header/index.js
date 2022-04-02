import React from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

import colors from '../../commonStyleSheet/Color';
import styles from './styles';

const Header = props => {
  const navigation = useNavigation();

  const {headerText, enableBack} = props;

  return (
    <View>
      <StatusBar
        backgroundColor={colors.colorBackground}
        barStyle="light-content"
      />
      <View style={styles.container}>
        {enableBack ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.main}>
            <FastImage
              source={require('../../../assets/images/back.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.main} />
        )}
        <View style={styles.textcontainer}>
          <Text style={styles.text}>{headerText}</Text>
        </View>
        <View style={styles.main} />
      </View>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  enableBack: PropTypes.bool.isRequired,
};

Header.defaultProp = {
  headerText: '',
  enableBack: false,
};

export default Header;
