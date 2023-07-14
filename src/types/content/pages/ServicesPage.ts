import { IInfoBlock } from '../../../components/elements/InfoBlock'
import { ITabsInfoContent } from '../../../components/elements/TabsInfo'
import { IRegForm } from '../../../components/elements/RegForm'
import { IPageContent } from '../PageContent'

interface IPageInfoBlock extends IInfoBlock {
  texts?: Array<{ text: string }>
}

export interface IServicesContent extends IPageContent {
  infoBlock: IPageInfoBlock
  servicesBlock: ITabsInfoContent
  regFormBlock: IRegForm
}
