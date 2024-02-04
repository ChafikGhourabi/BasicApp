/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { ErrorBoundary } from '@/screens/ErrorScreen/ErrorBoundary';
import { AppNavigator, useNavigationPersistence } from '@/navigators';
import * as storage from '@/utils/storage';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

// Prevent native splash screen from auto-hiding before App component declaration
SplashScreen.preventAutoHideAsync();

function App(): React.JSX.Element {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  useEffect(() => {
    setTimeout(SplashScreen.hideAsync, 500);
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchErrors="always">
        <AppNavigator
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

export default App;
