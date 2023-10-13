import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'

interface MetadataProps {
  title?: string
  description?: string
}

const Metadata: React.FC<MetadataProps> = ({ title, description }) => {
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
      {title && <meta property="og:title" content={title} />}
      {description && <meta property={description} content={description} />}
      {<meta property={''} content={''} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {title && <meta property="twitter:title" content={title} />}
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      {<meta property="twitter:image" content={''} />}
      <meta property="twitter:card" content="summary" />
      {<meta property="vk:image" content={''} />}
    </Head>
  )
}

export default Metadata
