import { IPageHead } from '../../../components/elements/PageHead'
import { IAboutClinicBlock } from '../../../components/elements/AboutClinicBlock'
import { IPageContent } from '../PageContent'
import { IRegForm } from '../../../components/elements/RegForm'

interface IPageHeadContent extends IPageHead {
  text?: string
}

interface IAboutClinicBlockContent extends IAboutClinicBlock {
  text: string
  subtext: string
}

export interface IAboutClinicContent extends IPageContent {
  pageHead: IPageHeadContent
  aboutClinicBlock: IAboutClinicBlockContent
  regFormBlock: IRegForm
}
