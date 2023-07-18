import { ITitleBlock } from '../../../components/elements/TitleBlock'
import { IFiltersPriceBlock } from '../../../components/elements/FiltersPriceBlock'
import { IRegForm } from '../../../components/elements/RegForm'
import { IPageContent } from '../PageContent'

export interface IPricePageContent extends IPageContent {
  titleBlock: ITitleBlock
  filtersPriceBlock: IFiltersPriceBlock
  regFormBlock: IRegForm
}
