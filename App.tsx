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
import { AppNavigator } from '@/navigators';

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync();

function App(): React.JSX.Element {
  useEffect(() => {
    (async () => {
      setTimeout(SplashScreen.hideAsync, 500);
    })();
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchErrors="always">
        <AppNavigator />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

export default App;
