import React from 'react'

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
      <Html 
        lang="en"
        style={{
          minHeight: '100vh'
        }}
      >
        <Head>
            <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" />
            <link 
              rel="stylesheet" 
              href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" 
              media="print" 
              onLoad={(event) => {
                const linkElement = event.target as HTMLLinkElement;
                linkElement.media = 'all';
              }} />
            <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" rel="stylesheet" />
            <link rel="icon" type="image/png" href="/assets/logo/logo-icon-circle-orange.svg"/>
            <Script src="https://kit.fontawesome.com/75a401b8c1.js" crossOrigin="anonymous" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2248724540494118" crossOrigin="anonymous"></script>
        </Head>
        <body
          style={{
            minHeight: '100vh'
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }