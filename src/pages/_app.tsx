import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../redux/store';

import GlobalStyles from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
      <Provider store={store}>

        <GlobalStyles />
        <Component {...pageProps} />
        
      </Provider>
    )
}
