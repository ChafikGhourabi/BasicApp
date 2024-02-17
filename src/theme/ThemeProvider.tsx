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

export type ThemeType = {
  setLocale: (locale: Locale) => void;
  theme: Theme;
  switchTheme: () => void;
  colors: ReturnType<typeof generateColors>;
};

export const ThemeContext = createContext<ThemeType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [{ languageCode }] = useLocales();
  const [locale, setLocale] = useState<Locale>(
    (languageCode as Locale) || 'en',
  );
  const [theme, setTheme] = useState<Theme>('light');
  const [isAutoTheme, setIsAutoTheme] = useState(true);
  const systemTheme = useColorScheme();

  useEffect(() => {
    if (isAutoTheme) {
      setTheme(systemTheme as Theme);
    }
  }, [systemTheme]);

  const colors = useMemo(() => generateColors(theme), [theme]);
  const toggleTheme = useCallback(() => {
    if (!isAutoTheme)
      switchTheme({
        switchThemeFunction: () => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        },
        animationConfig: {
          type: 'fade',
          duration: 300,
        },
      });
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ setLocale, theme, colors, switchTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
