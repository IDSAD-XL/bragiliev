import React from 'react'
import Reviews from '../src/pages/Reviews'
import { reviewsContent } from '../src/mock/reviews'

const ReviewsPage: React.FC = () => {
  return <Reviews {...reviewsContent} />
}

export default ReviewsPage
