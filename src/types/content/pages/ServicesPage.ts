import { IInfoBlock } from '../../../components/elements/static-blocks/InfoBlock'
import { ITabsInfoContent } from '../../../components/elements/statefull-components/TabsInfo'
import { IRegForm } from '../../../components/elements/statefull-components/RegForm'
import { IPageContent } from '../PageContent'

interface IPageInfoBlock extends IInfoBlock {
  texts?: Array<{ text: string }>
}

export interface IServicesContent extends IPageContent {
  infoBlock: IPageInfoBlock
  servicesBlock: ITabsInfoContent
  regFormBlock: IRegForm
}
