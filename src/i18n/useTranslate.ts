import { useContext } from 'react';
import { I18nManager } from 'react-native';
import { TOptionsBase } from 'i18next';
import { useTranslation, UseTranslationOptions } from 'react-i18next';

import { Locale, Translations, TxKeyPath } from './types';
import { useTheme } from '@/theme';

interface TranslationHook {
  setLocale: (locale: Locale, callback?: () => void) => void;
  t: (key: TxKeyPath, option?: TOptionsBase & Record<string, any>) => string;
  locale: string;
}

export function useTranslate(
  translations?: Translations[],
  options?: UseTranslationOptions<TxKeyPath>,
): TranslationHook {
  const {
    t: translate,
    i18n: { language, changeLanguage },
  } = useTranslation(translations, options);

  const { setLocale } = useTheme();

  const changeDirection = (isRTL: boolean) => {
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);
  };

  const t: TranslationHook['t'] = (key, option) => translate(key, option);

  const setLanguage: TranslationHook['setLocale'] = (locale, callback) => {
    if (locale === language) return;
    const isArabic = language === 'ar';
    if (!isArabic && locale === 'ar') changeDirection(true);
    if (locale !== 'ar') changeDirection(false);
    changeLanguage(locale, callback);
    setLocale?.(locale);
  };

  return {
    t,
    setLocale: setLanguage,
    locale: language,
  };
}
