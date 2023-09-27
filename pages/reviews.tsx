import React from 'react'
import ReviewsPage, {IReviews} from '../src/pages/ReviewsPage'
import {Api} from "../src/api/Api";
import {GetStaticProps} from "next";

interface pageProps {
  data: IReviews
}

const ReviewsNextPage: React.FC<pageProps> = ({ data}) => {
  return <ReviewsPage {...data} />
}

export const getStaticProps = (async () => {
  const data = await Api.reviews()

  return {
    props: { data },
    revalidate: 60
  }
}) satisfies GetStaticProps<{
  data: IReviews
}>

export default ReviewsNextPage
