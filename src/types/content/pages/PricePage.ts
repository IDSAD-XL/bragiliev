import { ITitleBlock } from '../../../components/elements/static-blocks/TitleBlock'
import { IFiltersPriceBlock } from '../../../components/elements/statefull-components/FiltersPriceBlock'
import { IRegForm } from '../../../components/elements/statefull-components/RegForm'
import { IPageContent } from '../PageContent'

export interface IPricePageContent extends IPageContent {
  titleBlock: ITitleBlock
  filtersPriceBlock: IFiltersPriceBlock
  regFormBlock: IRegForm
}
