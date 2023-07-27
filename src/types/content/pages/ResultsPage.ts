import { IResultsContent } from '../../../components/elements/statefull-components/Results'
import { IRegForm } from '../../../components/elements/statefull-components/RegForm'
import { IPageContent } from '../PageContent'

export interface IResultsPageContent extends IPageContent {
  resultsBlock: IResultsContent
  regFormBlock: IRegForm
}
