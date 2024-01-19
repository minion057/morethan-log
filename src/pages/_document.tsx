import Document, { Html, Head, Main, NextScript } from "next/document"
import { CONFIG } from "site.config"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
          <link rel="manifest" href="/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff">
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
          <meta name="theme-color" content="#ffffff">
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}
          {/* naver search advisor */}
          {CONFIG.naverSearchAdvisor.enable === true && (
            <>
              <meta
                name="naver-site-verification"
                content={CONFIG.naverSearchAdvisor.config.siteVerification}
              />
            </>
          )}
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
