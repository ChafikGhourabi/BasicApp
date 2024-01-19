import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { Translations, TupleUnion } from './types';
import en from './strings/en.json';
import fr from './strings/fr.json';
import ar from './strings/ar.json';

export const ns = Object.keys(en) as TupleUnion<Translations>;

export const defaultNS = ns[0];

void i18n.use(initReactI18next).init({
  ns,
  defaultNS,
  resources: {
    en,
    fr,
    ar,
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  compatibilityJSON: 'v3',
});

export default i18n;
