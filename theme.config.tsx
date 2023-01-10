import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs';
import { CurrentYear } from './src/components/current-year';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const footerLinks = [
  { name: 'Terms of Services', href: '/tos/' },
  { name: 'Privacy Policy', href: '/privacy/' },
  { name: 'Sponsors', href: '/sponsors/' },
  { name: 'Contact Us', href: '/contact/' }
];

const config: DocsThemeConfig = {
  logo: (
    <div className="flex flex-wrap items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 512 512">
        <path d="M400 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-21.6c-38.6-23-64-62.1-64-106.4C112 57.3 176.5 0 256 0s144 57.3 144 128zm-200 48c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm144-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zM35.4 273.7a31.97 31.97 0 0 1 42.9-14.3L256 348.2l177.7-88.8a31.97 31.97 0 1 1 28.6 57.2L327.6 384l134.8 67.4a31.97 31.97 0 1 1-28.6 57.2L256 419.8 78.3 508.6a31.97 31.97 0 1 1-28.6-57.2L184.4 384 49.7 316.6a31.97 31.97 0 0 1-14.3-42.9z" />
      </svg>
      <span className="font-bold text-lg ml-2">DNS.SB</span>
    </div>
  ),
  i18n: [],
  project: {
    link: 'https://github.com/dns-sb/dns.sb'
  },
  docsRepositoryBase: 'https://github.com/dns-sb/dns.sb',
  gitTimestamp() {
    return null;
  },
  footer: {
    component: (
      <footer className="w-full bg-gray-100 dark:bg-gray-900 py-16">
        <div className="md:px-12 lg:px-28">
          <div className="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
            <ul
              role="list"
              className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
            >
              {
                footerLinks.map(link => (
                  <li role="listitem" key={link.href}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))
              }
            </ul>
            <div className="text-center px-2">
              <span className="text-sm tracking-wide">
                Copyright &copy; 2019{' '}-{' '}<CurrentYear defaultYear={2023} />
                <br className="md:hidden" />
                <span className="hidden md:inline">{' '}</span>
                <a
                  href="https://xtom.com"
                  target="_blank"
                  rel="noreferrer nooopenner"
                  className="underline"
                >
                  xTom GmbH
                </a>
                {' '}
                | All right reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    )
  },
  // TODO: remove once https://github.com/shuding/nextra/issues/1210 is fixed
  toc: {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    extraContent: <></>
  },
  head() {
    // Custom <head /> goes here
    // const config = useConfig();
    // const { route } = useRouter();
    return (
      <>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/favicon/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#211b24" />
      </>
    );
  },
  useNextSeoProps() {
    const config = useConfig();
    const title = config.frontMatter.title ? `${config.frontMatter.title} - DNS.SB` : 'DNS.SB';
    const description = config.frontMatter.description ? config.frontMatter.description : 'Browse Internet, Faster and More Private with DNS.SB\'s extremely performant and stable DNS resolver services';

    const { route } = useRouter();
    const canonical = useMemo(() => new URL(route.endsWith('/') ? route : `${route}/`, 'https://dns.sb').toString(), [route]);

    return {
      defaultTitle: 'DNS.SB',
      title,
      description,
      canonical,
      openGraph: {
        url: canonical,
        title,
        siteName: 'DNS.SB',
        images: [
          {
            url: '/images/logo_with_text.png',
            type: 'image/png',
            width: 2048,
            height: 632
          }
        ]
      },
      twitter: {
        cardType: 'summary_large_image'
      }
    };
  }
};

export default config;
