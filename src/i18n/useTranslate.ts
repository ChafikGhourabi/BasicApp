import { I18nManager } from 'react-native';
import { TOptionsBase } from 'i18next';
import { useTranslation, UseTranslationOptions } from 'react-i18next';
import { Locales, Translations, TxKeyPath } from './types';

interface TranslationHook {
  setLocale: (locale: Locales, callback?: () => void) => void;
  t: (key: TxKeyPath, option?: TOptionsBase & Record<string, any>) => string;
  locale: string;
}

export function useTranslate(
  translations?: Translations[],
  options?: UseTranslationOptions<any>,
): TranslationHook {
  const {
    t: translate,
    i18n: { language, changeLanguage },
  } = useTranslation(translations, options);

  const t: TranslationHook['t'] = (key, option) => translate(key, option);

  const setLocale: TranslationHook['setLocale'] = (locale, callback) => {
    if (locale === language) return;
    const isArabic = language === 'ar';
    if (!isArabic && locale === 'ar') I18nManager.forceRTL(true);
    if (isArabic && locale !== 'ar') I18nManager.forceRTL(false);
    changeLanguage(locale, callback);
  };

  return {
    t,
    setLocale,
    locale: language,
  };
}
