import { readdir, stat, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

const SITE_URL = 'https://dns.sb'
const CONTENT_DIR = 'content'
const OUTPUT_FILE = 'public/sitemap.xml'

async function getAllPages(dir: string): Promise<string[]> {
  const pages: string[] = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      const subPages = await getAllPages(fullPath)
      pages.push(...subPages)
    } else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
      pages.push(fullPath)
    }
  }

  return pages
}

function pagePathToUrl(pagePath: string): string {
  const relativePath = relative(CONTENT_DIR, pagePath)
  let urlPath = relativePath.replace(/\.(md|mdx)$/, '')

  if (urlPath.endsWith('/index') || urlPath === 'index') {
    urlPath = urlPath.replace(/\/?index$/, '')
  }

  return urlPath ? `${SITE_URL}/${urlPath}/` : `${SITE_URL}/`
}

async function getLastModified(filePath: string): Promise<string> {
  const stats = await stat(filePath)
  return stats.mtime.toISOString().split('T')[0]
}

async function generateSitemap(): Promise<void> {
  console.log('Generating sitemap.xml...')

  const pages = await getAllPages(CONTENT_DIR)
  const urls: { loc: string; lastmod: string }[] = []

  for (const page of pages) {
    const url = pagePathToUrl(page)
    const lastmod = await getLastModified(page)
    urls.push({ loc: url, lastmod })
  }

  urls.sort((a, b) => a.loc.localeCompare(b.loc))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, lastmod }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`

  await writeFile(OUTPUT_FILE, sitemap, 'utf-8')
  console.log(`Sitemap generated with ${urls.length} URLs -> ${OUTPUT_FILE}`)
}

generateSitemap().catch((error) => {
  console.error('Failed to generate sitemap:', error)
  process.exit(1)
})
