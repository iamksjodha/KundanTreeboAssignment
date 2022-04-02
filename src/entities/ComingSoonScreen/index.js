import React from 'react';
import {View, Text} from 'react-native';

import Strings from '../../constants/strings';
import styles from './styles';

const ComingSoonScreen = props => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.labelText}>{Strings.LABEL_TEXT}</Text>
    </View>
  );
};

export default ComingSoonScreen;
