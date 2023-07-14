import { IResultsContent } from '../../../components/elements/Results'
import { IRegForm } from '../../../components/elements/RegForm'
import { IPageContent } from '../PageContent'

export interface IResultsPageContent extends IPageContent {
  resultsBlock: IResultsContent
  regFormBlock: IRegForm
}
