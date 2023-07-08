import React from 'react'
import Results from '../src/pages/ResultsPage'
import { resultsContent } from '../src/mock/results'

const ResultsPage: React.FC = () => {
  return <Results {...resultsContent} />
}

export default ResultsPage
