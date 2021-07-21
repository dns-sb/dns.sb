<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink
        :to="$localePath"
        class="home-link"
    >
      <img
          v-if="$site.themeConfig.logo"
          class="logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
      >
      <span
          v-if="$siteTitle"
          ref="siteName"
          class="site-name"
          :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </RouterLink>

    <div
        class="links"
        :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox
          v-if="isAlgoliaSearch"
          :options="algolia"
      />


      <div class="search-box" v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false">
          <input id="search_input" type="text" aria-live="Search" autocomplete="off" spellcheck="false" placeholder="Search...">
      </div>

      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import 'docsearch.js/dist/cdn/docsearch.min.css'
export default {
  name: 'Navbar',

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox
  },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
            - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)

    import('docsearch.js/dist/cdn/docsearch.min').then((module) => {
      module.default({
        indexName: 'dns-sb',
        appId: 'BX2RMLOD1H',
        apiKey: 'e18de52712a4fe4c2a58cb37508b836a',
        inputSelector: '#search_input',
        // See https://www.algolia.com/doc/api-reference/api-parameters/
        algoliaOptions: {
          hitsPerPage: 10,
          facetFilters: ''
        },
        // See https://community.algolia.com/docsearch/behavior.html#autocompleteoptions
        autocompleteOptions: {
          openOnFocus: true
        }
      })
    })
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
  /* Main dropdown wrapper */
  .algolia-autocomplete .ds-dropdown-menu:before{
    background $darkBgColor-2
    border-right-color $darkBgColor-2
    border-top-color $darkBgColor-2
  }
  .algolia-autocomplete .ds-dropdown-menu
    width: 500px
    border-radius 10px !important
    background #1a161d
  .algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-]{
    background $darkBgColor
    border-color $darkBgColor
  }
  .algolia-autocomplete .algolia-docsearch-suggestion
    background $darkBgColor-2
    color $lightTextColor

  /* Main category (eg. Getting Started) */
  .algolia-autocomplete .algolia-docsearch-suggestion--category-header
    color $lightTextColor
    border 1px solid $darkBgColor-2

  /* Category (eg. Downloads) */
  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column
    color: #dadada;
    background: #3f3146;
    border-radius: 5px;

  /* Title (eg. Bootstrap CDN) */
  .algolia-autocomplete .algolia-docsearch-suggestion--title
    font-weight: bold
    color: $lightTextColor

  /* Description description (eg. Bootstrap currently works...) */
  .algolia-autocomplete .algolia-docsearch-suggestion--text
    font-size: 0.8rem
    color: $lightTextColor

  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column:before,
  .algolia-autocomplete .algolia-docsearch-suggestion--content:before
    background #5d4967

  .algolia-docsearch-suggestion--content
    background $darkBgColor-2

  /* Highlighted text */
  .algolia-autocomplete .algolia-docsearch-suggestion--highlight
    color: #e196ff

  .algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion.suggestion-layout-simple, .algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion:not(.suggestion-layout-simple) .algolia-docsearch-suggestion--content
    background #483967

  .algolia-autocomplete .algolia-docsearch-suggestion--category-header .algolia-docsearch-suggestion--category-header-lvl0 .algolia-docsearch-suggestion--highlight, .algolia-autocomplete .algolia-docsearch-suggestion--category-header .algolia-docsearch-suggestion--category-header-lvl1 .algolia-docsearch-suggestion--highlight, .algolia-autocomplete .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight
    box-shadow inset 0 -2px 0 0 #e093ff
@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
