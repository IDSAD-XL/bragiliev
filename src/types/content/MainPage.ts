import { IPageHead } from '../../components/elements/PageHead'
import { IInfoBlock } from '../../components/elements/InfoBlock'

interface IPageHeadContent extends IPageHead {
  text?: string
}

interface IPageInfoBlock extends IInfoBlock {
  texts?: Array<{ text: string }>
}

export interface IMainContent {
  pageHead: IPageHeadContent
  infoBlock: IPageInfoBlock
}
