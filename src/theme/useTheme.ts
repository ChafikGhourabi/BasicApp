import { useContext } from 'react';
import { ThemeContext, ThemeType } from './ThemeProvider';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
