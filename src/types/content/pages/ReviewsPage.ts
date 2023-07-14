import { IInfoBlock } from '../../../components/elements/InfoBlock'
import { IFiltersReviewsBlock } from '../../../components/elements/FiltersReviewsBlock'
import { IRegForm } from '../../../components/elements/RegForm'
import { IPageContent } from '../PageContent'

interface IPageInfoBlock extends IInfoBlock {
  texts?: Array<{ text: string }>
}

export interface IReviewsContent extends IPageContent {
  infoBlock: IPageInfoBlock
  filtersReviewsBlock: IFiltersReviewsBlock
  regFormBlock: IRegForm
}
