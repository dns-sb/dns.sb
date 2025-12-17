import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Callout, Tabs } from 'nextra/components'
import StepContainer from './src/components/step-container'
import YouTubeEmbed from './src/components/youtube-embed'
import HomePage from './src/components/page-home'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: Record<string, React.ComponentType>) {
  return {
    ...docsComponents,
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
