import React from 'react'
import ReviewsPage, { IReviews } from '../src/pages/ReviewsPage'
import { Api } from '../src/api/Api'
import { GetStaticProps } from 'next'
import Metadata from '../src/components/layout/Metadata'

interface pageProps {
  data: IReviews
}

const ReviewsNextPage: React.FC<pageProps> = ({ data }) => {
  return (
    <>
      <Metadata
        title={data?.meta?.title}
        description={data?.meta?.description}
      />
      <ReviewsPage {...data} />
    </>
  )
}

export const getStaticProps = (async () => {
  const data = await Api.reviews()

  return {
    props: { data },
    revalidate: 60,
  }
}) satisfies GetStaticProps<{
  data: IReviews
}>

export default ReviewsNextPage
