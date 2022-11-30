import type { AppProps } from 'next/app'
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5229654791822120" crossOrigin="anonymous"></script>
    </>
  )
}
