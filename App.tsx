/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Prevent native splash screen from autohiding before App component declaration
// SplashScreen.preventAutoHideAsync();

function App(): React.JSX.Element {
  useEffect(() => {
    (async () => {
      setTimeout(SplashScreen.hideAsync, 500);
    })();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{ backgroundColor: isDarkMode ? '#AABBCC' : 'white', flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{ color: isDarkMode ? 'white' : 'black' }}>Hello world</Text>
    </SafeAreaView>
  );
}

export default App;
