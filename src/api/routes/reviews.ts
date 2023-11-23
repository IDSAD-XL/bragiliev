import { reviewsContent } from '../../mock/reviews'
import { IReviews } from '../../pages/ReviewsPage'
import { IReviewsFiltersItem } from '../../components/elements/statefull-components/FiltersReviewsBlock'
import { projectConstants } from '../../constants/projectConstants'

export const getReviews = async (): Promise<IReviews> => {
  try {
    const fetchUrl = `https://grandmed.ru/ajax/api/reviews.php?id=${projectConstants.doctorId}`
    const resp = await fetch(fetchUrl)
    const fetchData: IReviewsFiltersItem[] = await resp.json()

    return {
      ...reviewsContent,
      filtersReviewsBlock: {
        selects: reviewsContent.filtersReviewsBlock.selects,
        slides: fetchData,
      },
    }
  } catch (e) {
    return reviewsContent
  }
}
