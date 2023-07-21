import { IRegForm } from '../../../components/elements/RegForm'
import { IPageContent } from '../PageContent'
import { ITitleBlock } from '../../../components/elements/TitleBlock'

export interface IContactsContent extends IPageContent {
  titleBlock: ITitleBlock
  regFormBlock: IRegForm
}
