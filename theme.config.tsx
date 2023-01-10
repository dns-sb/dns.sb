import type { DocsThemeConfig } from 'nextra-theme-docs';
import { CurrentYear } from './src/components/current-year';

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
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/dns-sb/dns.sb',
  footer: {
    text: <p>
      Copyright &copy; 2019{' '}-{' '}<CurrentYear defaultYear={2023} />{' '}xTom GmbH
    </p>
  },
  // TODO: remove once https://github.com/shuding/nextra/issues/1210 is fixed
  toc: {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    extraContent: <></>
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - DNS.SB'
    };
  }
};

export default config;
