'use client'

import { ReactNode, isValidElement, Children, useCallback } from 'react'
import lightGallery from 'lightgallery'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'

interface MdxLinkProps {
  href?: string
  children?: ReactNode
  [key: string]: any
}

function isImageElement(child: ReactNode): boolean {
  if (!isValidElement(child)) return false

  const type = child.type
  if (typeof type === 'string' && type === 'img') return true
  if (typeof type === 'function' && (type as any).name === 'img') return true

  // Check props for Next.js Image or custom img components
  const props = child.props as any
  if (props?.src && (props?.alt !== undefined || props?.alt === '')) return true

  return false
}

function extractSrc(src: any): string {
  if (typeof src === 'string') return src
  // Next.js image imports return an object with src property
  if (src && typeof src === 'object' && typeof src.src === 'string') return src.src
  return ''
}

function getImageFromChildren(children: ReactNode): { src: string; alt: string } | null {
  let result: { src: string; alt: string } | null = null

  Children.forEach(children, (child) => {
    if (result) return

    if (isImageElement(child) && isValidElement(child)) {
      const props = child.props as any
      result = {
        src: extractSrc(props.src),
        alt: props.alt || ''
      }
    }
  })

  return result
}

function ImageLightbox({ href, children }: { href: string; children: ReactNode }) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()

    // Find all lightbox images on the page
    const allImages = document.querySelectorAll('[data-lightbox-src]')
    const dynamicEl: { src: string; thumb: string; subHtml: string }[] = []
    let currentIndex = 0

    allImages.forEach((img, index) => {
      const src = img.getAttribute('data-lightbox-src') || ''
      const alt = img.getAttribute('data-lightbox-alt') || ''
      dynamicEl.push({
        src,
        thumb: src,
        subHtml: alt ? `<p>${alt}</p>` : ''
      })
      if (src === href) {
        currentIndex = index
      }
    })

    // Create and open lightGallery with all images
    const lg = lightGallery(document.body, {
      dynamic: true,
      dynamicEl,
      index: currentIndex,
      speed: 300,
      plugins: [lgZoom],
      download: false,
      counter: dynamicEl.length > 1,
      showZoomInOutIcons: true,
      actualSize: false
    })

    lg.openGallery(currentIndex)

    // Clean up after close
    document.body.addEventListener('lgAfterClose', () => {
      lg.destroy()
    }, { once: true })
  }, [href])

  // Clone children to extract src properly
  const styledChildren = Children.map(children, (child) => {
    if (isValidElement(child) && isImageElement(child)) {
      const props = child.props as any
      return (
        <img
          {...props}
          src={extractSrc(props.src)}
        />
      )
    }
    return child
  })

  const imageInfo = getImageFromChildren(children)

  return (
    <span
      className="inline-block cursor-zoom-in"
      data-lightbox-src={href}
      data-lightbox-alt={imageInfo?.alt || ''}
      onClick={handleClick}
    >
      <span className="block">
        {styledChildren}
      </span>
    </span>
  )
}

export default function MdxLink({ href, children, ...props }: MdxLinkProps) {
  const imageInfo = getImageFromChildren(children)

  // If the link contains an image and links to an image, use lightbox
  if (imageInfo && href && /\.(webp|png|jpg|jpeg|gif|svg)$/i.test(href)) {
    return <ImageLightbox href={href}>{children}</ImageLightbox>
  }

  // Regular link
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}
