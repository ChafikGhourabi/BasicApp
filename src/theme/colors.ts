const palette = {
  neutral100: '#FFFFFF',
  neutral200: '#F4F2F1',
  neutral300: '#D7CEC9',
  neutral400: '#B6ACA6',
  neutral500: '#978F8A',
  neutral600: '#564E4A',
  neutral700: '#3C3836',
  neutral800: '#191015',
  neutral900: '#000000',

  accent100: '#FFEED4',
  accent200: '#FFE1B2',
  accent300: '#FDD495',
  accent400: '#FBC878',
  accent500: '#FFBB50',

  angry100: '#F2D6CD',
  angry500: '#C03403',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',
} as const;

const paletteLight = {
  ...palette,

  primary100: '#F4E0D9',
  primary200: '#E8C1B4',
  primary300: '#DDA28E',
  primary400: '#D28468',
  primary500: '#C76542',
  primary600: '#A54F31',

  secondary100: '#DCDDE9',
  secondary200: '#BCC0D6',
  secondary300: '#9196B9',
  secondary400: '#626894',
  secondary500: '#41476E',
} as const;

const paletteDark = {
  ...palette,

  neutral100: '#000000',
  neutral200: '#191015',
  neutral300: '#3C3836',
  neutral400: '#564E4A',
  neutral500: '#978F8A',
  neutral600: '#B6ACA6',
  neutral700: '#D7CEC9',
  neutral800: '#F4F2F1',
  neutral900: '#FFFFFF',

  primary100: '#DCDDE9',
  primary200: '#BCC0D6',
  primary300: '#9196B9',
  primary400: '#626894',
  primary500: '#41476E',

  secondary100: '#F4E0D9',
  secondary200: '#E8C1B4',
  secondary300: '#DDA28E',
  secondary400: '#D28468',
  secondary500: '#C76542',
  secondary600: '#A54F31',
} as const;

const colors = {
  light: paletteLight,
  dark: paletteDark,
} as const;

export type Theme = 'light' | 'dark' | 'system';

export const generateColors = (theme: Exclude<Theme, 'system'>) => ({
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  paletteLight,
  paletteDark,

  primary: colors[theme].primary500,
  card: colors[theme].neutral200,
  notification: colors[theme].angry500,
  /**
   * A helper for making something see-thru.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The default text color in many components.
   */
  text: colors[theme].neutral800,
  /**
   * Secondary text information.
   */
  textDim: colors[theme].neutral600,
  /**
   * The default color of the screen background.
   */
  background: colors[theme].neutral200,
  /**
   * The default border color.
   */
  border: colors[theme].neutral400,
  /**
   * The main tinting color.
   */
  tint: colors[theme].primary500,
  /**
   * A subtle color used for lines.
   */
  separator: colors[theme].neutral300,
  /**
   * Error messages.
   */
  error: colors[theme].angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: colors[theme].angry100,
});
