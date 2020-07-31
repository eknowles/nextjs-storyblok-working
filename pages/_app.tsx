import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@chakra-ui/core';
import theme from '../utils/theme';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
