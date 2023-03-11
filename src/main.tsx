import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'de',                              // language to use
    debug: true,
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        de: {
            common: common_de
        },
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </I18nextProvider>
  </React.StrictMode>,
)
