import { ISelectContent } from '../../components/elements/stateless-components/Select'
import {
  IResultsContent,
  IResultsSlide,
} from '../../components/elements/statefull-components/Results'
import { resultsContent } from '../../mock/results'
import { IResultsPage } from '../../pages/ResultsPage'
import { projectConstants } from '../../constants/projectConstants'

export const getResults = async (): Promise<IResultsPage> => {
  try {
    interface resultsDTO {
      selects: ISelectContent[]
      results: IResultsSlide[]
    }

    const fetchUrl = `https://grandmed.ru/ajax/api/result.php?id=${projectConstants.doctorId}`
    const resp = await fetch(fetchUrl)
    const fetchData: resultsDTO = await resp.json()

    const resultsData: IResultsContent = {
      ...resultsContent.resultsBlock,
      results: fetchData?.results,
      selects: fetchData?.selects,
    }

    return { ...resultsContent, resultsBlock: resultsData }
  } catch (e) {
    return resultsContent
  }
}
