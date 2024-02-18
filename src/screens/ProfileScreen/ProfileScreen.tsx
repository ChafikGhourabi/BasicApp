import { View, Text, StatusBar, useColorScheme, Button } from 'react-native';
import React, { FC } from 'react';
import { useTranslate } from '@/i18n';
import { useSafeAreaInsetsStyle } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { AppStackScreenProps } from '@/navigators';
import { useTheme } from '@/theme';

interface ProfileScreenProps extends AppStackScreenProps<'Profile'> {}

const ProfileScreen: FC<ProfileScreenProps> = () => {
  const { setLocale, t, locale } = useTranslate();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const inset = useSafeAreaInsetsStyle(['top']);
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? 'black' : 'white',
        // justifyContent: 'center',
        alignItems: 'center',
        // ...inset,
      }}>
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
          title={t('button:language', { language: 'Français' })}
          onPress={() => setLocale('fr')}
        />
        <Button title="Navigate to Home" onPress={() => navigate('Home')} />
        <Button
          title="Switch theme to system"
          onPress={() => toggleTheme('system')}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
