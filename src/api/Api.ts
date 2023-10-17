import { getResults } from './routes/results'
import { getPrices } from './routes/prices'
import { getReviews } from './routes/reviews'
import { getServices } from './routes/services'
import { getMain } from './routes/main'
import { postForm } from './routes/send-form'
import { getService } from './routes/service'

export const Api = {
  getMain,
  getResults,
  getPrices,
  getReviews,
  getServices,
  getService,
  postForm,
}
