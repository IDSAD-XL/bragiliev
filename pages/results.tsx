import React from 'react'
import ResultsPage from '../src/pages/ResultsPage'
import { resultsContent } from '../src/mock/results'

const ResultsNextPage: React.FC = () => {
  return <ResultsPage {...resultsContent} />
}

export default ResultsNextPage
