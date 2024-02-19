import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProfileScreen } from '@/screens';
import { useColorScheme } from 'react-native';
import Config from '@/config';
import { navigationRef, useBackButtonHandler } from './utils';
// import { AppStackParamList, NavigationProps } from './types';
import { useTheme } from '@/theme';
import { AppStackParamList, NavigationProps } from '@/types/navigators';

const Stack = createStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName={true ? 'Home' : 'Profile'}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export function AppNavigator(props: NavigationProps) {
  const { colors, theme } = useTheme();

  useBackButtonHandler(routeName => Config.exitRoutes.includes(routeName));

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{ colors, dark: theme === 'dark' }}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
}
