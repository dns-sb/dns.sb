import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Callout, Tabs } from 'nextra/components'
import StepContainer from './src/components/step-container'
import YouTubeEmbed from './src/components/youtube-embed'
import HomePage from './src/components/page-home'
import MdxLink from './src/components/mdx-link'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: Record<string, React.ComponentType>) {
  return {
    ...docsComponents,
    // Override default link to support lightbox for images
    a: MdxLink,
    // Register custom components globally so MDX files don't need to import them
    Callout,
    Tabs,
    Tab: Tabs.Tab,
    StepContainer,
    YouTubeEmbed,
    HomePage,
    ...components
  }
}
