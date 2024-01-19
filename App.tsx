/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useTranslate } from './src/i18n';

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync();

function App(): React.JSX.Element {
  const { setLocale, t, locale } = useTranslate();
  useEffect(() => {
    (async () => {
      setTimeout(SplashScreen.hideAsync, 500);
    })();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDarkMode ? 'black' : 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text
          style={{
            color: isDarkMode ? 'white' : 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
          }}>
          {t('example:helloUser', { name: 'Chafik GHOURABI' })}
        </Text>
        <Text
          style={{
            color: isDarkMode ? 'white' : 'black',
            textAlign: 'center',
            margin: 10,
          }}>
          {locale}
        </Text>
        <Button
          title="Change Language"
          onPress={() => {
            setLocale('en');
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
