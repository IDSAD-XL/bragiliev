import { IInfoBlock } from '../../components/elements/InfoBlock'
import { ITabsInfo } from '../../components/elements/TabsInfo'
import { IRegForm } from '../../components/elements/RegForm'

interface IPageInfoBlock extends IInfoBlock {
  texts?: Array<{ text: string }>
}

export interface IServicesContent {
  infoBlock: IPageInfoBlock
  servicesBlock: ITabsInfo
  regFormBlock: IRegForm
}