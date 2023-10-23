import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
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
          <meta name="google-adsense-account" content="ca-pub-2248724540494118" />
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
          <script
            src="https://kit.fontawesome.com/75a401b8c1.js"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument