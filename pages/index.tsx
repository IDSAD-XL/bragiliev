import React from 'react'
import MainPage, {IMain} from '../src/pages/MainPage'
import {Api} from "../src/api/Api";
import {GetStaticProps} from "next";

interface pageProps {
  data: IMain
}

const MainNextPage: React.FC<pageProps> = ({ data }) => {
  return <MainPage {...data} />
}

export const getStaticProps = (async () => {
  const data = await Api.main()

  return {
    props: { data },
    revalidate: 60
  }
}) satisfies GetStaticProps<{
  data: IMain
}>

export default MainNextPage
