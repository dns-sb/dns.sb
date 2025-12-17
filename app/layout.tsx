import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../src/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { AreYouUsingDnsSb } from '../src/components/detect-dnssb'
import { CurrentYear } from '../src/components/current-year'

export const metadata: Metadata = {
  metadataBase: new URL('https://dns.sb'),
  title: {
    default: 'DNS.SB',
    template: '%s - DNS.SB'
  },
  description: "Browse Internet, Faster and More Private with DNS.SB's extremely performant and stable DNS resolver services",
  icons: {
    icon: [
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
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
    card: 'summary_large_image'
  }
}

const footerLinks = [
  { name: 'Terms of Services', href: '/tos/' },
  { name: 'Privacy Policy', href: '/privacy/' },
  { name: 'Sponsors', href: '/sponsors/' },
  { name: 'Contact Us', href: '/contact/' }
]

const footerContacts = [
  {
    name: 'X',
    href: 'https://x.com/dns_dot_sb',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 50 50">
        <path d="M11 4C7.134 4 4 7.134 4 11v28c0 3.866 3.134 7 7 7h28c3.866 0 7-3.134 7-7V11c0-3.866-3.134-7-7-7H11zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.211 9.613L37.914 37h-7.936l-6.54-9.293L15.5 37H13l9.309-10.896L13.086 13zm3.828 2l14.107 20h3.064L18.979 15h-3.065z" />
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
]

const Logo = () => (
  <div className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 512 512">
      <path d="M400 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-21.6c-38.6-23-64-62.1-64-106.4C112 57.3 176.5 0 256 0s144 57.3 144 128zm-200 48c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm144-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zM35.4 273.7a31.97 31.97 0 0 1 42.9-14.3L256 348.2l177.7-88.8a31.97 31.97 0 1 1 28.6 57.2L327.6 384l134.8 67.4a31.97 31.97 0 1 1-28.6 57.2L256 419.8 78.3 508.6a31.97 31.97 0 1 1-28.6-57.2L184.4 384 49.7 316.6a31.97 31.97 0 0 1-14.3-42.9z" />
    </svg>
    <span className="font-bold text-lg ml-2">DNS.SB</span>
  </div>
)

const CustomFooter = () => (
  <footer className="w-full bg-gray-100 dark:bg-zinc-800 py-16">
    <div className="md:px-12 lg:px-28">
      <div className="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
        <ul
          role="list"
          className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
        >
          {footerLinks.map(link => (
            <li role="listitem" key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="m-auto flex w-max items-center justify-between space-x-4">
          {footerContacts.map(contact => (
            <a key={contact.href} href={contact.href} title={contact.name} rel="me noopener noreferrer" target="_blank" aria-label={contact.name}>
              <span className="sr-only">{contact.name}</span>
              {contact.icon}
            </a>
          ))}
        </div>
        <div className="text-center px-2 mt-4">
          <span className="text-sm tracking-wide">
            Copyright &copy; 2019 - <CurrentYear defaultYear={2025} />
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <a
              href="https://xtom.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline"
            >
              xTom
            </a>
            {' | '}
            <a
              href="https://xtom.com/impressum/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline"
            >
              Impressum
            </a>
            {' '}
            | All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
)

const navbar = (
  <Navbar
    logo={<Logo />}
  >
    <ThemeSwitch />
  </Navbar>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="🌐">
        <script defer data-domain="dns.sb" src="https://stat.dns.sb/js/script.js" />
      </Head>
      <body>
        <AreYouUsingDnsSb />
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/dns-sb/dns.sb/blob/master"
          footer={<CustomFooter />}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
