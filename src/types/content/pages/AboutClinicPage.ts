import { IAboutClinicBlock } from '../../../components/elements/static-blocks/AboutClinicBlock'
import { IPageContent } from '../PageContent'
import { IPageHead } from '../../../components/elements/static-blocks/PageHead'
import { IRegForm } from '../../../components/elements/statefull-components/RegForm'

interface IPageHeadContent extends IPageHead {
  text?: string
}

interface IAboutClinicBlockContent extends IAboutClinicBlock {
  text?: string
  desc: Array<{
    text: string
  }>
}

export interface IAboutClinicContent extends IPageContent {
  pageHead: IPageHeadContent
  aboutClinicBlocks: IAboutClinicBlockContent[]
  regFormBlock: IRegForm
}
