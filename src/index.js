import React from 'react';
import ReactDOM from 'react-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

import RootComponent from './components/root-component';

import '@shopify/polaris/dist/styles.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <RootComponent />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
