import { PropsWithChildren, createContext, useState } from 'react';
import { useLocales } from 'expo-localization';

import { Locales } from './types';

type Context = {
  locale?: Locales;
  setLocale?: (locale: Locales) => void;
};

export const LocalizationContext = createContext<Context>({});

export function LocalizationProvider({ children }: PropsWithChildren) {
  const [{ languageCode }] = useLocales();
  const [locale, setLocale] = useState(languageCode || 'en');

  return (
    <LocalizationContext.Provider
      value={{ locale: locale as Locales, setLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
}
