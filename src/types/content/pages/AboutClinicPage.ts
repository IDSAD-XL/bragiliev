import { IPageHead } from '../../../components/elements/PageHead'
import { IPageContent } from '../PageContent'
import { IRegForm } from '../../../components/elements/RegForm'

interface IPageHeadContent extends IPageHead {
  text?: string
}

export interface IAboutClinicContent extends IPageContent {
  pageHead: IPageHeadContent
  regFormBlock: IRegForm
}
