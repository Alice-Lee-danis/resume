import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import './components/static/font.module.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
      <App />
    </Provider>
    
);
