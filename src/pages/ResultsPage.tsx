import React from 'react'
import Layout from '../components/layout/Layout'
import Results from '../components/elements/statefull-components/Results'
import { IResultsPageContent } from '../types/content/pages/ResultsPage'
import RegForm from '../components/elements/statefull-components/RegForm'

interface IResultsPage extends IResultsPageContent {}

const ResultsPage: React.FC<IResultsPage> = ({
  layout,
  resultsBlock,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <Results {...resultsBlock} spacing={'big'} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ResultsPage
