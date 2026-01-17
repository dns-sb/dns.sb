import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: {
    type: 'page',
    display: 'hidden',
    title: 'Home',
    theme: {
      layout: 'full',
      breadcrumb: false,
      sidebar: false,
      toc: false,
      pagination: false,
      timestamp: false,
      copyPage: false
    }
  },
  features: {
    type: 'page',
    title: 'Why DNS.SB'
  },
  guide: {
    type: 'page',
    title: 'Using DNS.SB'
  },
  dot: {
    type: 'page',
    title: 'DNS over TLS'
  },
  doh: {
    type: 'page',
    title: 'DNS over HTTPS'
  },
  faq: {
    type: 'page',
    title: 'FAQ'
  },
  about: {
    type: 'menu',
    title: 'About',
    items: {
      tos: {
        title: 'Terms of Service',
        href: '/tos/'
      },
      servers: {
        title: 'Our Servers',
        href: '/servers/'
      },
      privacy: {
        title: 'Privacy Policy',
        href: '/privacy/'
      },
      sponsors: {
        title: 'Sponsors',
        href: '/sponsors/'
      },
      report: {
        title: 'Transparency Report',
        href: '/report/'
      },
      contact: {
        title: 'Contact DNS.SB',
        href: '/contact/'
      }
    }
  },
  tos: {
    display: 'hidden',
    title: 'ToS',
    theme: {
      sidebar: false,
      pagination: false
    }
  },
  servers: {
    display: 'hidden',
    title: 'Our Servers',
    theme: {
      sidebar: false,
      pagination: false
    }
  },
  report: {
    display: 'hidden',
    title: 'Transparency Report',
    theme: {
      sidebar: false,
      pagination: false
    }
  },
  privacy: {
    display: 'hidden',
    title: 'Privacy Policy',
    theme: {
      sidebar: false,
      pagination: false
    }
  },
  sponsors: {
    display: 'hidden',
    title: 'Sponsors',
    theme: {
      sidebar: false,
      pagination: false
    }
  },
  contact: {
    display: 'hidden',
    title: 'Contact Us',
    theme: {
      sidebar: false,
      pagination: false
    }
  }
}

export default meta
