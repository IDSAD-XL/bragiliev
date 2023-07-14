import React from 'react'
import MainPage from '../src/pages/MainPage'
import { mainContent } from '../src/mock/main'

const MainNextPage: React.FC = () => {
  return <MainPage {...mainContent} />
}

export default MainNextPage
