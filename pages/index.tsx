import React from 'react'
import Main from '../src/pages/Main'
import { mainContent } from '../src/mock/main'

const Index: React.FC = () => {
  return (
    <Main pageHead={mainContent.pageHead} infoBlock={mainContent.infoBlock} />
  )
}

export default Index
