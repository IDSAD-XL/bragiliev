import { IRegForm } from '../../../components/elements/statefull-components/RegForm'
import { IPageContent } from '../PageContent'
import { IPageHead } from '../../../components/elements/static-blocks/PageHead'
import { IContentSection } from '../../elements/ContentSection'

interface IPageHeadContent extends IPageHead {
  text?: string
}

export interface IAboutContent extends IPageContent {
  pageHead: IPageHeadContent
  contentSections: IContentSection[]
  regFormBlock: IRegForm
}
