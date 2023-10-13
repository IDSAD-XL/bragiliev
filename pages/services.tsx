import React from 'react'
import ServicesPage, { IServices } from '../src/pages/ServicesPage'
import { Api } from '../src/api/Api'
import { GetStaticProps } from 'next'
import Metadata from '../src/components/layout/Metadata'

interface pageProps {
  data: IServices
}

const ServicesNextPage: React.FC<pageProps> = ({ data }) => {
  return (
    <>
      <Metadata
        title={data?.meta?.title}
        description={data?.meta?.description}
      />
      <ServicesPage {...data} />
    </>
  )
}

export const getStaticProps = (async () => {
  const data = await Api.services()

  return {
    props: { data },
    revalidate: 60,
  }
}) satisfies GetStaticProps<{
  data: IServices
}>

export default ServicesNextPage
