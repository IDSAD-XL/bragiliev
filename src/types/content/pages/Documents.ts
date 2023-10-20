import { IPageContent } from '../PageContent'
import { IAccordionContent } from '../../../components/elements/stateless-components/Accordion'

export interface IDocumentsPageContent extends IPageContent {
  accordions: IAccordionContent[]
}
