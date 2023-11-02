import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {routes} from '@/constants';
import Home from '@/screens/home/home';
import FeedingLogs from '@/screens/feedingLogs/feedingLogs';

const Tab = createBottomTabNavigator();

export default ({route}) => {
  const getTabBarIcon = (bottomTabRoute, focused) => {
    const color = focused ? 'red' : 'grey';
    switch (bottomTabRoute.name) {
      case routes.HOME:
        return <Icons name="home-heart" size={30} color={color} />;

      case routes.FEEDING_LOGS:
        return <Icons name="baby-bottle" size={30} color={color} />;
      // case routes.MORE:
      //   return <Icons name="home-heart" size={30} color={color} />;
      default:
        return null;
    }
  };

  const placeholder = () => <ActivityIndicator />;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        lazy: true,
        lazyPlaceholder: placeholder,
        tabBarIcon: ({focused}) => getTabBarIcon(route, focused),
        tabBarActiveTintColor: 'red',
        tabBarLabelPosition: 'below-icon',
      })}>
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen
        name={routes.FEEDING_LOGS}
        component={FeedingLogs}
        options={{tabBarLabel: 'Logs'}}
      />
    </Tab.Navigator>
  );
};
