import { IRegForm } from '../../../components/elements/statefull-components/RegForm'
import { IPageContent } from '../PageContent'
import { ITitleBlock } from '../../../components/elements/static-blocks/TitleBlock'

export interface IContactsContent extends IPageContent {
  titleBlock: ITitleBlock
  regFormBlock: IRegForm
}
