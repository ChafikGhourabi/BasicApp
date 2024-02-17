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
import { useFonts } from 'expo-font';
import { customFontsToLoad, ThemeProvider } from '@/theme';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

// Prevent native splash screen from auto-hiding before App component declaration
SplashScreen.preventAutoHideAsync();

function App(): React.JSX.Element {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  const [areFontsLoaded] = useFonts(customFontsToLoad);

  useEffect(() => {
    if (isNavigationStateRestored && areFontsLoaded) {
      setTimeout(SplashScreen.hideAsync, 500);
    }
  }, [isNavigationStateRestored, areFontsLoaded]);

  if (!isNavigationStateRestored || !areFontsLoaded) {
    return <></>;
  }

  return (
    <ThemeProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors="always">
          <AppNavigator
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </ErrorBoundary>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
