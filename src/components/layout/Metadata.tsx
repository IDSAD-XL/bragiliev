import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'

interface MetadataProps {
  title?: string
  description?: string
  og?: {
    title?: string
    description?: string
    image?: string
  }
  social?: {
    twitter?: {
      title?: string
      description?: string
      image?: string
      card?: string
    }
    vk?: {
      image?: string
    }
  }
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  og,
  social,
}) => {
  const currentUrlRef = useRef<string>('')
  const [currentUrl, setCurrentUrl] = useState<string>('')

  useEffect(() => {
    currentUrlRef.current = window.location.href
    setCurrentUrl(window.location.href)
  }, [])

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && (
        <meta name="description" content={description} key="desc" />
      )}
      {og?.title && <meta property="og:title" content={og.title} />}
      {og?.description && (
        <meta property={og.description} content={og.description} />
      )}
      {og?.image && <meta property={og.image} content={og.image} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {social?.twitter?.title && (
        <meta property="twitter:title" content={social.twitter.title} />
      )}
      {social?.twitter?.description && (
        <meta
          property="twitter:description"
          content={social.twitter.description}
        />
      )}
      {social?.twitter?.image && (
        <meta property="twitter:image" content={social.twitter.image} />
      )}
      <meta property="twitter:card" content="summary" />
      {social?.vk?.image && (
        <meta property="vk:image" content={social.vk.image} />
      )}
    </Head>
  )
}

export default Metadata
