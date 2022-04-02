import {StyleSheet} from 'react-native';

import colors from '../../commonStyleSheet/Color';
import {
  heightPercentageToDP,
  responsiveFontSize,
  widthPercentageToDP,
} from '../../commonStyleSheet/ResponsiveSize';
import {flexVariable} from '../../commonStyleSheet/FlexVariable';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.colorBackground,
  },
  songContainer: {
    width: '100%',
    flexDirection: flexVariable.row,
    paddingTop: heightPercentageToDP(1),
    paddingBottom: heightPercentageToDP(1),
    alignItems: 'center',
  },
  songText: {
    fontSize: responsiveFontSize(15),
    color: colors.listTextColor,
  },
  songAlbumText: {
    fontSize: responsiveFontSize(12),
    color: colors.listTextColor,
  },
  iconStyle: {
    width: widthPercentageToDP(10),
    height: heightPercentageToDP(5),
  },
  songDetailsContain: {
    marginLeft: widthPercentageToDP(2),
  },
  labelText: {
    fontSize: responsiveFontSize(18),
    color: colors.themeColor,
  },
});

export default styles;
