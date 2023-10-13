import { ILayout } from '../../components/layout/Layout'
import { MetaData } from './pages/MetaData'

export interface IPageContent {
  meta?: MetaData
  layout: ILayout
}
