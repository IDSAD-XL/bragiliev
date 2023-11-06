import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface MetadataProps {
  title?: string
  description?: string
}

const Metadata: React.FC<MetadataProps> = ({ title, description }) => {
  const router = useRouter()
  const currentUrl = `https://v-bragilev.ru${
    router.asPath.split('#')[0].split('?')[0]
  }`

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
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://picsum.photos/400/300" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta
        property="og:image:alt"
        content="A shiny red apple with a bite taken out"
      />
      <meta property="og:site_name" content="grandmed" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {title && <meta property="twitter:title" content={title} />}
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      {
        <meta
          property="twitter:image"
          content={'https://picsum.photos/400/300'}
        />
      }
      <meta property="twitter:card" content="summary" />
      {<meta property="vk:image" content={'https://picsum.photos/400/300'} />}
    </Head>
  )
}

export default Metadata
