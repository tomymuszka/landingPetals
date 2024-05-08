import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { HomePage } from './Home/Home.page.tsx';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <React.StrictMode>
        <HomePage />
      </React.StrictMode>
    </SnackbarProvider>
  </NextUIProvider>
);
