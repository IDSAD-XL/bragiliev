import React from 'react'
import Layout from '../components/layout/Layout'
import Image from 'next/image'

interface IMainContent {
  image?: string
}

// const mainContent: IMainContent = {}

interface IMain extends IMainContent {}

const Main: React.FC<IMain> = () => {
  return (
    <Layout>
      <Image
        style={{
          width: '100%',
          zIndex: '-1',
        }}
        src="/assets/main-bg.jpg"
        alt=""
        fill={true}
      />
    </Layout>
  )
}

export default Main
