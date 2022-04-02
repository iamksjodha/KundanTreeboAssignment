import {StyleSheet} from 'react-native';

import {widthPercentageToDP} from '../../commonStyleSheet/ResponsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: widthPercentageToDP(5),
  },
});

export default styles;
