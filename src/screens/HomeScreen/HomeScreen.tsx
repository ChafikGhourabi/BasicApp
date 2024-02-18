import {
  View,
  Text,
  StatusBar,
  useColorScheme,
  Button,
  StyleSheet,
} from 'react-native';
import React, { FC } from 'react';
import { useTranslate } from '@/i18n';
import { useSafeAreaInsetsStyle } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { AppStackScreenProps } from '@/navigators';
import { ThemeType, useTheme } from '@/theme';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const { setLocale, t, locale } = useTranslate();
  const { colors, toggleTheme, theme, isDarkMode } = useTheme();
  const { navigate } = useNavigation();
  const style = makeStyle(colors);

  const inset = useSafeAreaInsetsStyle(['top']);

  return (
    <View style={style.mainContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
        <Button
          title="Navigate to Profile"
          onPress={() => navigate('Profile')}
        />
        <Button
          title="Switch theme"
          onPress={() => toggleTheme(theme == 'dark' ? 'light' : 'dark')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const makeStyle = (colors: ThemeType['colors']) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.background,
      // justifyContent: 'center',
      alignItems: 'center',
      // ...inset,
    },
  });
