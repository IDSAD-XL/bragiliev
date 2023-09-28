import {ISelectContent} from "../../components/elements/stateless-components/Select";
import {IResultsContent, IResultsSlides} from "../../components/elements/statefull-components/Results";
import {resultsContent} from "../../mock/results";
import {IResultsPage} from "../../pages/ResultsPage";

export const getResults = async (): Promise<IResultsPage> => {
  interface resultsDTO {
    selects: ISelectContent[],
    results: IResultsSlides[]
  }

  const fetchUrl = 'https://grandmed.ru/ajax/api/result.php?id=9110'
  const resp = await fetch(fetchUrl)
  const fetchData: resultsDTO = await resp.json()

  const resultsData: IResultsContent = {
    ...resultsContent.resultsBlock,
    results: fetchData?.results,
    selects: fetchData?.selects
  }

  return  {...resultsContent, resultsBlock: resultsData}
}