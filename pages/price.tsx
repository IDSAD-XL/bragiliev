import React from 'react'
import PricePage, {IPrice} from '../src/pages/PricePage'
import {Api} from "../src/api/Api";
import {GetStaticProps} from "next";

interface pageProps {
  data: IPrice
}

const PriceNextPage: React.FC<pageProps> = ({ data }) => {
  return <PricePage {...data} />
}

export const getStaticProps = (async () => {
  const data = await Api.prices()

  return {
    props: { data },
    revalidate: 60
  }
}) satisfies GetStaticProps<{
  data: IPrice
}>

export default PriceNextPage
