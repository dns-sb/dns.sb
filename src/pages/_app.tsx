import Script from 'next/script';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AreYouUsingDnsSb from '../components/detect-dnssb';

function MyApp({ Component, pageProps }: AppProps) {
  if ('statusCode' in pageProps && pageProps.statusCode === 404) {
    return (
      <Component {...pageProps} />
    );
  }
  return (
    <>
      <AreYouUsingDnsSb />
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && (
        <Script
          data-domain="dns.sb"
          src="https://stat.dns.sb/js/plausible.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

export default MyApp;
