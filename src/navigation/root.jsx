import React from 'react';
import {StatusBar, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {routes} from '@/constants';
import linking from './linking';
import BottomTabs from './BottomTabs';

import FeedingLog from '@/screens/feedingLog/feedingLog';

const Stack = createNativeStackNavigator();

const StackNavigatior = () => (
  <Stack.Navigator mode="modal" initialRouteName={routes.BOTTOM_TABS}>
    <Stack.Screen
      name={routes.BOTTOM_TABS}
      component={BottomTabs}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen name={routes.FEEDING_LOG} component={FeedingLog} />
  </Stack.Navigator>
);
const Navigation = () => (
  <NavigationContainer linking={linking}>
    {}
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={{backgroundColor: Colors.lighter}}
      />
      <StackNavigatior />
    </View>
  </NavigationContainer>
);

export default Navigation;
