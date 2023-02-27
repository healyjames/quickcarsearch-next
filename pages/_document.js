import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      <Html>
        <Head>
            <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" media="print" onLoad="this.media='all'" />
            <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" rel="stylesheet" />
            <link rel="icon" type="image/png" href="/assets/logo/logo-icon-circle-orange.svg"/>
            <script src="/assets/js/currency_format.js" type="text/javascript"></script>
            <script src="/assets/js/sort_by.js" type="text/javascript"></script>
            <script src="https://kit.fontawesome.com/75a401b8c1.js" crossOrigin="true"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }