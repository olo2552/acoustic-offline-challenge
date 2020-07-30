import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// @ts-ignore
import translationEN from './locales/en/translation.json.ts';

const resources = {
    en: {
        translation: translationEN
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export {i18n};