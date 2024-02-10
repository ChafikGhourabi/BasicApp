import { View, Text, StatusBar, useColorScheme, Button } from 'react-native';
import React, { FC } from 'react';
import { useTranslate } from '@/i18n';
import { useSafeAreaInsetsStyle } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { AppStackScreenProps } from '@/navigators';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { setLocale, t, locale } = useTranslate();
  const { navigate } = useNavigation();

  const inset = useSafeAreaInsetsStyle(['top']);

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
          title={t('button:language', { language: 'English' })}
          onPress={() => {
            setLocale('en');
          }}
        />
        <Button
          title="Navigate to Profile"
          onPress={async () => {
            navigate('Profile');
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
