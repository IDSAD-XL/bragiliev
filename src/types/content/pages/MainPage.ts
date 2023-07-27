import { IPageHead } from '../../../components/elements/static-blocks/PageHead'
import { IInfoBlock } from '../../../components/elements/static-blocks/InfoBlock'
import { ITabsInfoContent } from '../../../components/elements/statefull-components/TabsInfo'
import { IResultsContent } from '../../../components/elements/statefull-components/Results'
import { IReviewsBlockContent } from '../../../components/elements/static-blocks/ReviewsBlock'
import { IInfoBlockWithImage } from '../../../components/elements/static-blocks/InfoBlockWithImage'
import { IQuestionsBlock } from '../../../components/elements/statefull-components/QuestionsBlock'
import { IRegForm } from '../../../components/elements/statefull-components/RegForm'
import { IPageContent } from '../PageContent'

interface IPageHeadContent extends IPageHead {
  text?: string
}

interface IPageInfoBlock extends IInfoBlock {
  texts?: Array<{ text: string }>
}

interface IInfoBlockWithImageContent extends IInfoBlockWithImage {
  texts?: Array<{ text: string }>
  link: string
}

export interface IMainContent extends IPageContent {
  pageHead: IPageHeadContent
  infoBlock: IPageInfoBlock
  servicesBlock: ITabsInfoContent
  reviewsBlock: IReviewsBlockContent
  aboutBlock: IInfoBlockWithImageContent
  questionsBlock: IQuestionsBlock
  resultsBlock: IResultsContent
  regFormBlock: IRegForm
}
