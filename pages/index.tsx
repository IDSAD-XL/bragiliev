import React from 'react'
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
        title={'Главная'}
        description="And a social description for our cool page"
        og={{
          description: 'OG description',
          title: 'OG title',
          image: 'OG image',
        }}
        social={{
          twitter: {
            description: 'twitter description',
            image: 'twitter image',
            title: 'twitter title',
            card: 'twitter card',
          },
          vk: {
            image: 'vk image',
          },
        }}
      />
      <MainPage {...data} />
    </>
  )
}

export const getStaticProps = (async () => {
  const data = await Api.main()

  return {
    props: { data },
    revalidate: 60,
  }
}) satisfies GetStaticProps<{
  data: IMain
}>

export default MainNextPage
