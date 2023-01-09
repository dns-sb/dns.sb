import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>DNS.SB</span>,
  i18n: [],
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  // TODO: remove once https://github.com/shuding/nextra/issues/1210 is fixed
  toc: {
    extraContent: <></>
  }
}

export default config
