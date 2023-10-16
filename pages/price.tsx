import React from 'react'
import PricePage, { IPrice } from '../src/pages/PricePage'
import { Api } from '../src/api/Api'
import { GetStaticProps } from 'next'
import Metadata from '../src/components/layout/Metadata'

interface pageProps {
  data: IPrice
}

const PriceNextPage: React.FC<pageProps> = ({ data }) => {
  return (
    <>
      <Metadata
        title={data?.meta?.title}
        description={data?.meta?.description}
      />
      <PricePage {...data} />
    </>
  )
}

export const getStaticProps = (async () => {
  const data = await Api.getPrices()

  return {
    props: { data },
    revalidate: 60,
  }
}) satisfies GetStaticProps<{
  data: IPrice
}>

export default PriceNextPage
