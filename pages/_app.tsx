import React from 'react'

import { Provider } from 'react-redux';
import store from '../redux/store';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, BrandConfig } from '../styles/theme';
import { NextComponentType } from 'next';

interface AppProps {
    Component: NextComponentType;
    pageProps: any;
  }

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={BrandConfig}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
        )
}