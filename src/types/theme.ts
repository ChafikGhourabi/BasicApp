import { generateColors } from '@/theme';
import { Locale } from './i18n';

export type Theme = 'light' | 'dark' | 'system';
export type ColorTheme = Exclude<Theme, 'system'>;

export type Colors = ThemeType['colors'];

export type ThemeType = {
  setLocale: (locale: Locale) => void;
  toggleTheme: (theme: Theme) => void;
  colors: ReturnType<typeof generateColors>;
  isDarkMode: boolean;
  theme: Theme;
};
