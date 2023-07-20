import { IRegForm } from '../../../components/elements/RegForm'
import { IPageContent } from '../PageContent'
import { IPageHead } from '../../../components/elements/PageHead'
import { ITabsInfoContent } from '../../../components/elements/TabsInfo'
import { IPriceList } from '../../../components/elements/PriceList'
import { IResultsContent } from '../../../components/elements/Results'

interface IPageHeadContent extends IPageHead {
  text?: string
}

export interface IServiceContent extends IPageContent {
  pageHead: IPageHeadContent
  servicesBlock: ITabsInfoContent
  pricesBlock: IPriceList
  resultsBlock: IResultsContent
  regFormBlock: IRegForm
}
