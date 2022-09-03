import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
	supportedLngs: ['en', 'tr'],
    fallbackLng: "en",
	detection:[ 'cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
	caches:['cookie'],
	backend: {
		loadPath: '/languages/{{lng}}.json'},
	react:{useSuspense:false},
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
 
      <App />
 
  </BrowserRouter>
  </React.StrictMode>
);


