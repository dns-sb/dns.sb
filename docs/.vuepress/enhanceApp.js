// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
const openDetails = (timeout = 50) => {
  setTimeout(() => { // wait for hash to change after link click
    const { hash } = location
    if (hash && hash.length) {
      setTimeout(() => {
        const el = document.getElementById(hash.substr(1))
        if (el && el.tagName.toLowerCase() === 'details') {
          el.setAttribute('open', true)
          const { offsetTop } = el
          window.scrollTo({ top: offsetTop })
        }
      }, timeout)
    }
  }, 150)
}

const openVideo = embedEl => {
  const lazyAttr = 'data-src'
  const iframe = embedEl.querySelector(`iframe[${lazyAttr}]`)
  if (iframe) {
    const src = iframe.getAttribute(lazyAttr)
    iframe.setAttribute('src', src)
  }
}

const isEnter = e => e.code === 'Enter' || (e.keyCode || e.which) === 13

const handleClick = e => {
  const isSearchInput = e.target.matches('#algolia-search-input') && isEnter(e)

  // faq details
  if (e.target.matches('.sidebar-link,.header-anchor,[class*="algolia"]') || isSearchInput) {
    openDetails()
  }

  // blur search field on select
  if (e.target.matches('.ds-dropdown-menu *') || isSearchInput) {
    document.getElementById('algolia-search-input').blur()
  }

  // youtube previews
  if (e.target.matches('.ytEmbed')) {
    openVideo(e.target)
  }
}

export default ({ router }) => {
  if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
    router.onReady(() => {
      const { app } = router

      // initial page rendering
      app.$once('hook:mounted', () => openDetails(500))

      document.addEventListener('click', handleClick)
      document.addEventListener('keyup', e => {
        if (isEnter(e)) handleClick(e)
      })
    })
  }
}
