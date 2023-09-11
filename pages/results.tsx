import React from 'react'
import ResultsPage, {IResultsPage} from '../src/pages/ResultsPage'
import {GetStaticProps} from "next";
import {Api} from "../src/api/Api";
interface pageProps {
  data: IResultsPage
}

const ResultsNextPage: React.FC<pageProps> = ({ data }) => {
  return <ResultsPage {...data} />
}

export const getStaticProps = (async () => {
  const data = await Api.results()

  return {
    props: { data },
    revalidate: 60
  }
}) satisfies GetStaticProps<{
  data: IResultsPage
}>

export default ResultsNextPage
