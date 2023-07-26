import { IInfoBlock } from '../../../components/elements/static-blocks/InfoBlock'
import { IFiltersReviewsBlock } from '../../../components/elements/statefull-components/FiltersReviewsBlock'
import { IRegForm } from '../../../components/elements/statefull-components/RegForm'
import { IPageContent } from '../PageContent'

interface IPageInfoBlock extends IInfoBlock {
  texts?: Array<{ text: string }>
}

export interface IReviewsContent extends IPageContent {
  infoBlock: IPageInfoBlock
  filtersReviewsBlock: IFiltersReviewsBlock
  regFormBlock: IRegForm
}
