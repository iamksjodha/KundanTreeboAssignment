import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP,
  heightPercentageToDP,
  responsiveFontSize,
} from '../../commonStyleSheet/ResponsiveSize';
import colors from '../../commonStyleSheet/Color';
import {flexVariable} from '../../commonStyleSheet/FlexVariable';

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: flexVariable.center,
    backgroundColor: colors.colorBackground,
    width: '100%',
    flexDirection: flexVariable.row,
  },
  textcontainer: {
    height: 60,
    width: '70%',
    alignItems: flexVariable.center,
    justifyContent: flexVariable.center,
  },
  imgcontainer: {
    height: 60,
    justifyContent: flexVariable.center,
  },
  img: {
    width: widthPercentageToDP(5),
    height: heightPercentageToDP(2),
    alignSelf: flexVariable.center,
  },
  text: {
    color: colors.listTextColor,
    fontSize: responsiveFontSize(15),
    textAlign: flexVariable.center,
    fontWeight: flexVariable.bold,
  },
  main: {
    width: '15%',
    height: 60,
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
  },
});

export default styles;
