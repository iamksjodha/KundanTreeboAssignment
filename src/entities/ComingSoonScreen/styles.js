import {StyleSheet} from 'react-native';

import colors from '../../commonStyleSheet/Color';
import {responsiveFontSize} from '../../commonStyleSheet/ResponsiveSize';
import {flexVariable} from '../../commonStyleSheet/FlexVariable';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.colorBackground,
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
    padding: 15,
  },
  labelText: {
    fontSize: responsiveFontSize(18),
    color: colors.listTextColor,
  },
});

export default styles;
