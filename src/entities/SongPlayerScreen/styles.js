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
  imageContainer: {
    width: '100%',
    height: heightPercentageToDP(40),
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
    alignSelf: flexVariable.center,
  },
  songImage: {
    width: '100%',
    height: heightPercentageToDP(40),
    resizeMode: 'contain',
    borderRadius: 3,
    shadowColor: colors.colorBackground,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  footerContainer: {
    paddingBottom: 20,
  },
  songDetailsText: {
    fontSize: responsiveFontSize(15),
    color: colors.listTextColor,
    marginTop: heightPercentageToDP(2),
    marginLeft: widthPercentageToDP(4),
  },
  artistText: {
    fontSize: responsiveFontSize(13),
    color: colors.textColor,
    marginTop: heightPercentageToDP(1),
    marginLeft: widthPercentageToDP(4),
  },
  songText: {
    fontSize: responsiveFontSize(18),
    color: colors.titleColor,
    textAlign: flexVariable.center,
    marginTop: 15,
  },
  playerContainer: {
    width: '70%',
    height: 50,
    flexDirection: flexVariable.row,
    alignSelf: flexVariable.center,
    justifyContent: flexVariable.spaceAround,
    marginTop: 20,
  },
  playerContain: {
    width: 50,
    height: 50,
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
  },
  playerIcon: {
    width: 50,
    height: 50,
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
  playerButton: {
    width: 25,
    height: 25,
  },
  autoPlayContainer: {
    width: '100%',
    height: 50,
    flexDirection: flexVariable.row,
    alignSelf: flexVariable.center,
    justifyContent: flexVariable.spaceBetween,
    marginTop: 20,
  },
  playContain: {
    height: 50,
    flexDirection: flexVariable.row,
    alignItems: flexVariable.center,
  },
  playText: {
    fontSize: responsiveFontSize(18),
  },
  slider: {
    width: '100%',
    marginTop: heightPercentageToDP(1),
  },
  songDurationStyle: {
    flexDirection: flexVariable.row,
    justifyContent: flexVariable.spaceBetween,
    paddingRight: widthPercentageToDP(3),
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
