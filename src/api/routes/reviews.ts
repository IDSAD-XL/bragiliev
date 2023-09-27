import {reviewsContent} from "../../mock/reviews";
import {IReviews} from "../../pages/ReviewsPage";
import {IReviewsFiltersItem} from "../../components/elements/statefull-components/FiltersReviewsBlock";

export const getReviews = async (): Promise<IReviews> => {

  const fetchUrl = 'https://grandmed.ru/ajax/api/reviews.php?id=9110'
  const resp = await fetch(fetchUrl)
  const fetchData: IReviewsFiltersItem[] = await resp.json()

  return  {...reviewsContent, filtersReviewsBlock: { selects: reviewsContent.filtersReviewsBlock.selects, slides: fetchData }}
}