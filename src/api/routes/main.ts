import { mainContent } from '../../mock/main'
import { IMain } from '../../pages/MainPage'
import { ISelectContent } from '../../components/elements/stateless-components/Select'
import {
  IResultsContent,
  IResultsSlide,
} from '../../components/elements/statefull-components/Results'
import { IReviewsFiltersItem } from '../../components/elements/statefull-components/FiltersReviewsBlock'
import { ITabInfoItem } from '../../components/elements/statefull-components/TabsInfo'
import { resultsContent } from '../../mock/results'
import { MetaData } from '../../types/content/pages/MetaData'
import { projectConstants } from '../../constants/projectConstants'

export const getMain = async (): Promise<IMain> => {
  try {
    interface resultsDTO {
      selects: ISelectContent[]
      results: IResultsSlide[]
    }

    interface IServicesDTO {
      meta: MetaData
      result: ITabInfoItem[]
    }

    const fetchUrlResults = `https://grandmed.ru/ajax/api/result.php?id=${projectConstants.doctorId}`
    const respResults = await fetch(fetchUrlResults)
    const fetchDataResults: resultsDTO = await respResults.json()

    const resultsData: IResultsContent = {
      ...resultsContent.resultsBlock,
      results: fetchDataResults?.results,
      selects: fetchDataResults?.selects,
    }

    const fetchUrlReviews = `https://grandmed.ru/ajax/api/reviews.php?id=${projectConstants.doctorId}`
    const respReviews = await fetch(fetchUrlReviews)
    const fetchDataReviews: IReviewsFiltersItem[] = await respReviews.json()

    const fetchUrlServices = 'https://grandmed.ru/ajax/api/services.php'
    const respServices = await fetch(fetchUrlServices)
    const fetchDataServices: IServicesDTO = await respServices.json()

    return {
      ...mainContent,
      resultsBlock: resultsData,
      reviewsBlock: {
        ...mainContent.reviewsBlock,
        slides: fetchDataReviews,
      },
      servicesBlock: {
        ...mainContent.servicesBlock,
        tabs: fetchDataServices.result.slice(0, 3),
      },
    }
  } catch (e) {
    return mainContent
  }
}
