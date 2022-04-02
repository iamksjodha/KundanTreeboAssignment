import React from 'react';
import {View} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';

import styles from './styles';
import {responsiveFontSize} from '../../commonStyleSheet/ResponsiveSize';
import colors from '../../commonStyleSheet/Color';

const CustomSearchBar = props => {
  return (
    <View>
      <SearchBar
        fontSize={responsiveFontSize(12)}
        fontColor={colors.textColor}
        iconColor={colors.textColor}
        cancelIconColor={colors.textColor}
        spinnerColor={colors.themeColor}
        style={styles.inputContainer}
        placeholderTextColor={colors.textColor}
        {...props}
      />
    </View>
  );
};

export default CustomSearchBar;
