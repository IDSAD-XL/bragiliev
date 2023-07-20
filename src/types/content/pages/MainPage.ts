import { IPageHead } from '../../../components/elements/PageHead'
import { IInfoBlock } from '../../../components/elements/InfoBlock'
import { ITabsInfoContent } from '../../../components/elements/TabsInfo'
import { IResultsContent } from '../../../components/elements/Results'
import { IReviewsBlockContent } from '../../../components/elements/ReviewsBlock'
import { IInfoBlockWithImage } from '../../../components/elements/InfoBlockWithImage'
import { IQuestionsBlock } from '../../../components/elements/QuestionsBlock'
import { IRegForm } from '../../../components/elements/RegForm'
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
