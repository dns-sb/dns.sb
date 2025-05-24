import Script from 'next/script';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AreYouUsingDnsSb from '../components/detect-dnssb';
import {useEffect} from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

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
          src="https://stat.dns.sb/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

export default MyApp;
