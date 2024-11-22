import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./App"

const root__main:ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root__main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


