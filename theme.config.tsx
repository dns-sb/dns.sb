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

const footerContacts = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/dns_dot_sb',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/dns-sb/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'Mastodon',
    href: 'https://c.im/@DNS',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512"><path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z" /></svg>
    )
  }
];

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 512 512">
        <path d="M400 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-21.6c-38.6-23-64-62.1-64-106.4C112 57.3 176.5 0 256 0s144 57.3 144 128zm-200 48c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm144-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zM35.4 273.7a31.97 31.97 0 0 1 42.9-14.3L256 348.2l177.7-88.8a31.97 31.97 0 1 1 28.6 57.2L327.6 384l134.8 67.4a31.97 31.97 0 1 1-28.6 57.2L256 419.8 78.3 508.6a31.97 31.97 0 1 1-28.6-57.2L184.4 384 49.7 316.6a31.97 31.97 0 0 1-14.3-42.9z" />
      </svg>
      <span className="font-bold text-lg ml-2">DNS.SB</span>
    </div>
  ),
  i18n: [],
  // project: {
  //   link: 'https://github.com/dns-sb/dns.sb'
  // },
  docsRepositoryBase: 'https://github.com/dns-sb/dns.sb/blob/master/',
  gitTimestamp() {
    return null;
  },
  footer: {
    component: (
      <footer className="w-full bg-gray-100 dark:bg-zinc-800 py-16">
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
            <div className="m-auto flex w-max items-center justify-between space-x-4">
              {
                footerContacts.map(contact => (
                  <a key={contact.href} href={contact.href} title={contact.name} rel="me noopenner" target="_blank" aria-label={contact.name}>
                    <span className="sr-only">{contact.name}</span>
                    {contact.icon}
                  </a>
                ))
              }
            </div>
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
                  xTom
                </a>
                {' '}
                | All rights reserved.
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
