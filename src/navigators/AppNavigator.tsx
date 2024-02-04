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
import { AppStackParamList } from './types';

const Stack = createStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
      // initialRouteName={true ? 'Home' : 'Profile'}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme();

  useBackButtonHandler(routeName => Config.exitRoutes.includes(routeName));

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
}
