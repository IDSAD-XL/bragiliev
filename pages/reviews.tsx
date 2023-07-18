import React from 'react'
import ReviewsPage from '../src/pages/ReviewsPage'
import { reviewsContent } from '../src/mock/reviews'

const ReviewsNextPage: React.FC = () => {
  return <ReviewsPage {...reviewsContent} />
}

export default ReviewsNextPage
