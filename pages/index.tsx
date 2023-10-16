import React, { useEffect } from 'react'
import MainPage, { IMain } from '../src/pages/MainPage'
import { Api } from '../src/api/Api'
import { GetStaticProps } from 'next'
import Metadata from '../src/components/layout/Metadata'

interface pageProps {
  data: IMain
}

const MainNextPage: React.FC<pageProps> = ({ data }) => {
  return (
    <>
      <Metadata
        title={data?.meta?.title}
        description={data?.meta?.description}
      />
      <MainPage {...data} />
    </>
  )
}

export const getStaticProps = (async () => {
  const data = await Api.getMain()

  return {
    props: { data },
    revalidate: 60,
  }
}) satisfies GetStaticProps<{
  data: IMain
}>

export default MainNextPage
