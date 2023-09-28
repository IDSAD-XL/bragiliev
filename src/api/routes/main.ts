import {mainContent} from "../../mock/main";
import {IMain} from "../../pages/MainPage";
import {ISelectContent} from "../../components/elements/stateless-components/Select";
import {IResultsContent, IResultsSlides} from "../../components/elements/statefull-components/Results";
import {IReviewsFiltersItem} from "../../components/elements/statefull-components/FiltersReviewsBlock";
import {ITabInfoItem} from "../../components/elements/statefull-components/TabsInfo";
import {resultsContent} from "../../mock/results";

export const getMain = async (): Promise<IMain> => {

  interface resultsDTO {
    selects: ISelectContent[],
    results: IResultsSlides[]
  }

  const fetchUrlResults = 'https://grandmed.ru/ajax/api/result.php?id=9110'
  const respResults = await fetch(fetchUrlResults)
  const fetchDataResults: resultsDTO = await respResults.json()

  const resultsData: IResultsContent = {
    ...resultsContent.resultsBlock,
    results: fetchDataResults?.results,
    selects: fetchDataResults?.selects
  }

  const fetchUrlReviews = 'https://grandmed.ru/ajax/api/reviews.php?id=9110'
  const respReviews = await fetch(fetchUrlReviews)
  const fetchDataReviews: IReviewsFiltersItem[] = await respReviews.json()

  const fetchUrlServices = 'https://grandmed.ru/ajax/api/services.php'
  const respServices = await fetch(fetchUrlServices)
  const fetchDataServices: ITabInfoItem[] = await respServices.json()

  return  {
    ...mainContent,
    resultsBlock: resultsData,
    reviewsBlock: {
      ...mainContent.reviewsBlock,
      slides: fetchDataReviews
    },
    servicesBlock: {
      ...mainContent.servicesBlock,
      tabs: fetchDataServices.slice(0, 3)
    }
  }
}