import React from 'react'
import ServicesPage, {IServices} from '../src/pages/ServicesPage'
import {Api} from "../src/api/Api";
import {GetStaticProps} from "next";

interface pageProps {
  data: IServices
}

const ServicesNextPage: React.FC<pageProps> = ({ data }) => {
  return <ServicesPage {...data} />
}

export const getStaticProps = (async () => {
  const data = await Api.services()

  return {
    props: { data },
    revalidate: 60
  }
}) satisfies GetStaticProps<{
  data: IServices
}>

export default ServicesNextPage
