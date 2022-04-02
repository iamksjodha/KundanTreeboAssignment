import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';

import SongList from '../../usecases/SongList';
import ComingSoon from '../../usecases/ComingSoon';
import colors from '../../commonStyleSheet/Color';
import styles from './styles';

import Home from '../../../assets/tabs/home.png';
import ActiveHome from '../../../assets/tabs/activeHome.png';
import Search from '../../../assets/tabs/search.png';
import ActiveSearch from '../../../assets/tabs/activeSearch.png';
import User from '../../../assets/tabs/user.png';
import ActiveUser from '../../../assets/tabs/activeUser.png';

const Tab = createBottomTabNavigator();
const CardsBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.themeColor,
        tabBarInactiveTintColor: colors.listTextColor,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.colorBackground,
        },

        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? ActiveHome : Home;
          } else if (route.name === 'Search') {
            iconName = focused ? ActiveSearch : Search;
          } else if (route.name === 'Account') {
            iconName = focused ? ActiveUser : User;
          }

          // You can return any component that you like here!
          return <FastImage source={iconName} style={styles.iconStyle} />;
        },
      })}
      backBehavior={'initialRoute'}
      initialRouteName={'Search'}>
      <Tab.Screen name="Home" component={ComingSoon} />
      <Tab.Screen name="Search" component={SongList} />
      <Tab.Screen name="Account" component={ComingSoon} />
    </Tab.Navigator>
  );
};

export default CardsBottomNavigation;
