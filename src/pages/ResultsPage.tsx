import React from 'react'
import Layout from '../components/layout/Layout'
import { IResultsPageContent } from '../types/content/ResultsPage'
import Results from '../components/elements/Results'
import RegForm from '../components/elements/RegForm'

interface IResultsPage extends IResultsPageContent {}

const ResultsPage: React.FC<IResultsPage> = ({
  resultsBlock,
  regFormBlock,
}) => {
  return (
    <Layout>
      <Results {...resultsBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ResultsPage
