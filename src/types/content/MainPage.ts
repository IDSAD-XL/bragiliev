import { IPageHead } from '../../components/elements/PageHead'
import { IInfoBlock } from '../../components/elements/InfoBlock'
import { ITabsInfo } from '../../components/elements/TabsInfo'

interface IPageHeadContent extends IPageHead {
  text?: string
}

interface IPageInfoBlock extends IInfoBlock {
  texts?: Array<{ text: string }>
}

export interface IMainContent {
  pageHead: IPageHeadContent
  infoBlock: IPageInfoBlock
  servicesBlock: ITabsInfo
}
