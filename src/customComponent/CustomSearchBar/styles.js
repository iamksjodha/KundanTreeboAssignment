import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  responsiveFontSize,
} from '../../commonStyleSheet/ResponsiveSize';
import colors from '../../commonStyleSheet/Color';

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: colors.textColor,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 2,
    fontSize: responsiveFontSize(15),
    height: 45,
    width: '100%',
    paddingLeft: 15,
    marginTop: heightPercentageToDP(2),
    backgroundColor: colors.colorBackground,
  },
});

export default styles;
