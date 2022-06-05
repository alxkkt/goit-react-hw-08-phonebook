import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';

import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
