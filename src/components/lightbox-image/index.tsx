'use client'

import { useEffect, useRef } from 'react'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'

interface LightboxImageProps {
  src: string
  alt?: string
  href?: string
}

export default function LightboxImage({ src, alt, href }: LightboxImageProps) {
  const lightGalleryRef = useRef<any>(null)

  const imageSrc = href || src

  return (
    <LightGallery
      onInit={(detail) => {
        lightGalleryRef.current = detail.instance
      }}
      speed={300}
      plugins={[lgZoom]}
      download={false}
      counter={false}
      elementClassNames="inline-block cursor-zoom-in"
    >
      <a
        href={imageSrc}
        data-src={imageSrc}
        className="block"
      >
        <img
          src={src}
          alt={alt || ''}
          className="rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
        />
      </a>
    </LightGallery>
  )
}
