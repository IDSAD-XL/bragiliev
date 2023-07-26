import { IRegForm } from '../../../components/elements/statefull-components/RegForm'
import { IPageContent } from '../PageContent'
import { IPageHead } from '../../../components/elements/static-blocks/PageHead'
import { ITabsInfoContent } from '../../../components/elements/statefull-components/TabsInfo'
import { IPriceList } from '../../../components/elements/static-blocks/PriceList'
import { IResultsContent } from '../../../components/elements/statefull-components/Results'

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
