import React from 'react'
import Layout from '../components/layout/Layout'
import Results from '../components/elements/Results'
import { IResultsPageContent } from '../types/content/ResultsPage'
import RegForm from '../components/elements/RegForm'

interface IResultsPage extends IResultsPageContent {}

const ResultsPage: React.FC<IResultsPage> = ({
  resultsBlock,
  regFormBlock,
}) => {
  return (
    <Layout background="#26262B" textColor="white">
      <Results {...resultsBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default ResultsPage
