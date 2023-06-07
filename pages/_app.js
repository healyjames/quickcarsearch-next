import { Provider } from 'react-redux';
import store from '../redux/store';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, BrandConfig } from '../styles/theme';


import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={BrandConfig}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
        )
}