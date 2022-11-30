import { Html, Main, NextScript, Head } from "next/document";
import { TRACKING_ID } from "../scripts/GoogleAnalytics";

export default function Document(){
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
        <meta name="google-site-verification" content="XNgvOQq81TS-u9Dc1RpLttMMU0lG_vlRhH16PyZNCOo" />
        <title>
          SAING.NET
        </title>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${TRACKING_ID}', {
            page_path: window.location.pathname,
          });`
        }}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
