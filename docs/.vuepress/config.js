const { resolve } = require('path')
const { slugify } = require('@vuepress/shared-utils')
const customBlock = require('markdown-it-custom-block')

const youtubeEmbed = (id, path) => `
  <div class="ytEmbed" data-id="${id}" style="background-image:url(https://img.youtube.com/vi/${id}/hqdefault.jpg);">
    <iframe
      title="YouTube ${id}"
      data-src="https://www.youtube-nocookie.com/embed/${path}&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0"
      frameborder="0"
      allow="autoplay;encrypted-media;picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>`

const themeColor = "#211b24"

module.exports = {
  title: "DNS.SB",
  description: "DNS.SB provides extremely fast and stable DNS resolver services.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: themeColor }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Inconsolata:400,700|Spectral:700&display=swap" }],
    ["meta", { name: "msapplication-TileColor", content: themeColor }],
    ["meta", { name: "theme-color", content: themeColor }],
  ],
  plugins: [
    "@vuepress/back-to-top",
    ["container", {
      type: "details",
      render (tokens, idx) {
        const token = tokens[idx]
        // turn details headline into summary
        if (token.type === 'container_details_open') {
          const next = tokens[idx + 1]
          const match = token.info.trim().match(/^details\s+(.*)$/)
          let title = match && match[1]
          if (next.type === 'heading_open' && !title) {
            const headContent = tokens[idx + 2]
            const headClose = tokens[idx + 3]
            // hide headline and its contents
            next.hidden = headClose.hidden = headContent.hidden = true
            headContent.children = []
            // extract title
            title = headContent.content || ''
          } else {
            title = ''
          }
          const slug = slugify(title)
          return `<details id="${slug}"><summary><a href="#${slug}" aria-hidden="true" class="header-anchor">#</a> <h4>${title}</h4></summary>`
        } else if (token.type === 'container_details_close') {
          return '</details>'
        }
      }
    }]
  ],
  chainWebpack (config) {
    return config.module
      .rule('md')
      .test(/\.md$/)
      .use(resolve(__dirname, './variables'))
        .loader(resolve(__dirname, './variables'))
        .end()
  },
  markdown: {
    extendMarkdown (md) {
      md.use(customBlock, {
        youtube (arg) {
          const [id, start] = arg.split(',')
          const path = start ? `${id}?start=${start}` : `${id}?`
          return youtubeEmbed(id, path)
        },
        youtubePlaylist (arg) {
          const [id, video] = arg.split(',')
          const path = `${video || ''}?listType=playlist&list=${id}`
          return youtubeEmbed(video || id, path)
        }
      })
    }
  },
  themeConfig: {
    logo: "/Logo_without_text.png",
    searchPlaceholder: 'Search the docs...',
    displayAllHeaders: false,
    sidebarDepth: 0,
    repo: "dns-sb/dns.sb",
    docsDir: "docs",
    editLinks: true,
    lastUpdated: 'Last Updated',
    algolia: {
      indexName: 'dns-sb',
      apiKey: 'e18de52712a4fe4c2a58cb37508b836a',
      // See https://www.algolia.com/doc/api-reference/api-parameters/
      algoliaOptions: {
        hitsPerPage: 25
      },
      // See https://community.algolia.com/docsearch/behavior.html#autocompleteoptions
      autocompleteOptions: {
        openOnFocus: true
      }
    },
    nav: [
      {
        text: "About",
        link: "/about/"
      },
      {
        text: "Why DNS.SB",
        link: "/feature/"
      },
      {
        text: "Using DNS.SB",
        link: "/guide/"
      },
      {
        text: "DNS over TLS",
        link: "/dot/"
      },
      {
        text: "DNS over HTTPS",
        link: "/doh/"
      },
      {
        text: "FAQ",
        link: "/faq/"
      },
      {
        text: "ToS",
        link: "/tos/"
      },
      {
        text: "Privacy",
        link: "/privacy/"
      },
      {
        text: "Contact",
        link: "/contact/"
      },
      {
        text: "Sponsor",
        link: "https://xtom.com/"
      }
    ],

    sidebar: {
      "/feature/": [
        {
          title: "Why DNS.SB",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/feature/why-privacy-is-important/",
            "/feature/why-dns-privacy-is-important/"
          ]
        }
      ],

      "/guide/": [
        {
          title: "Regular DNS Servers",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/guide/windows/",
            "/guide/linux/",
            "/guide/macos/",
            "/guide/ios/",
            "/guide/android/"
          ]
        },
        {
          title: "DNS over TLS (DoT)",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/guide/dot/android/",
            "/guide/dot/linux/",
            "/guide/dot/windows/",
            "/guide/dot/apple/"
          ]
        },
        {
          title: "DNS over HTTPS (DoH)",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/guide/doh/firefox/",
            "/guide/doh/chrome/",
            "/guide/doh/edge/",
            "/guide/doh/windows/",
            "/guide/doh/linux/",
            "/guide/doh/android/",
            "/guide/doh/apple/"
          ]
        }
      ]
    }
  }
}
