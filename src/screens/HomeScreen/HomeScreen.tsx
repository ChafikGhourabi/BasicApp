import {
  View,
  Text,
  StatusBar,
  useColorScheme,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, { FC } from 'react';
import { useTranslate } from '@/i18n';
import { useSafeAreaInsetsStyle } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/theme';
import { AppStackScreenProps } from '@/types/navigators';
import { Colors } from '@/types/theme';
import { Screen } from '@/components/template';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const { setLocale, t, locale } = useTranslate();
  const { colors, toggleTheme, theme, isDarkMode } = useTheme();
  const { navigate } = useNavigation();
  const style = makeStyle(colors);

  return (
    <Screen
      preset="auto"
      safeAreaEdges={['top', 'start', 'end']}
      KeyboardAvoidingViewProps={{}}
      //
    >
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
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
        title={t('button:language', { language: 'English' })}
        onPress={() => setLocale('en')}
      />
      <Button title="Navigate to Profile" onPress={() => navigate('Profile')} />
      <Button
        title="Switch theme"
        onPress={() => toggleTheme(theme == 'dark' ? 'light' : 'dark')}
      />
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
        title={t('button:language', { language: 'English' })}
        onPress={() => setLocale('en')}
      />
      <Button title="Navigate to Profile" onPress={() => navigate('Profile')} />
      <Button
        title="Switch theme"
        onPress={() => toggleTheme(theme == 'dark' ? 'light' : 'dark')}
      />
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
        title={t('button:language', { language: 'English' })}
        onPress={() => setLocale('en')}
      />
      <Button title="Navigate to Profile" onPress={() => navigate('Profile')} />
      <Button
        title="Switch theme"
        onPress={() => toggleTheme(theme == 'dark' ? 'light' : 'dark')}
      />
      <TextInput style={{ backgroundColor: 'red', marginBottom: 30 }} />
    </Screen>
  );
};

export default HomeScreen;

const makeStyle = (colors: Colors) => StyleSheet.create({});
