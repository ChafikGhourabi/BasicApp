import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocales } from 'expo-localization';

import type { Locale } from '../i18n';
import { Theme, generateColors } from './colors';
import switchTheme from 'react-native-theme-switch-animation';
import { useColorScheme } from 'react-native';
import * as storage from '@/utils/storage';

export type ThemeType = {
  setLocale: (locale: Locale) => void;
  toggleTheme: (theme: Theme) => void;
  colors: ReturnType<typeof generateColors>;
  isDarkMode: boolean;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [{ languageCode }] = useLocales();
  const [locale, setLocale] = useState<Locale>(
    (languageCode as Locale) || 'en',
  );
  const [theme, setTheme] = useState<Theme>('light');
  const systemTheme = useColorScheme();

  const isDarkMode = useMemo(
    () => (theme === 'system' ? systemTheme || 'light' : theme) === 'dark',
    [theme, systemTheme],
  );

  const colors = useMemo(
    () => generateColors(isDarkMode ? 'dark' : 'light'),
    [theme, isDarkMode],
  );

  useEffect(() => {
    (async function () {
      const savedTheme = await storage.loadString('theme');
      setTheme(savedTheme as Theme);
    })();
  }, []);

  const toggleTheme = useCallback((theme: Theme) => {
    storage.saveString('theme', theme);
    switchTheme({
      switchThemeFunction: () => {
        setTheme(theme);
      },
      animationConfig: {
        type: 'fade',
        duration: 300,
      },
    });
  }, []);

  const value = useMemo(
    () => ({
      toggleTheme,
      setLocale,
      isDarkMode,
      colors,
      theme,
    }),
    [toggleTheme, setLocale, isDarkMode, colors, theme, locale],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
