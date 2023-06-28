import { IPageHead } from '../../components/elements/PageHead'
import { IInfoBlock } from '../../components/elements/InfoBlock'
import { ITabsInfo } from '../../components/elements/TabsInfo'
import { IResultsContent } from '../../components/elements/Results'
import { IReviewsBlockContent } from '../../components/elements/ReviewsBlock'
import { IInfoBlockWithImage } from '../../components/elements/InfoBlockWithImage'
import { IQuestionsBlock } from '../../components/elements/QuestionsBlock'
import { IRegForm } from '../../components/elements/RegForm'

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

export interface IMainContent {
  pageHead: IPageHeadContent
  infoBlock: IPageInfoBlock
  servicesBlock: ITabsInfo
  resultsBlock: IResultsContent
  reviewsBlock: IReviewsBlockContent
  aboutBlock: IInfoBlockWithImageContent
  questionsBlock: IQuestionsBlock
  regFormBlock: IRegForm
}
