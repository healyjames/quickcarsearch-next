import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { DocumentContext } from 'next/document'
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap"
            media="print"
            onLoad={(event) => {
              const linkElement = event.target as HTMLLinkElement;
              linkElement.media = 'all';
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/logo/logo-icon-circle-orange.svg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script strategy="beforeInteractive" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2248724540494118" crossOrigin="anonymous" />
        </body>
      </Html>
    )
  }
}

export default MyDocument