import { getResults } from './routes/results'
import { getPrices } from './routes/prices'
import { getReviews } from './routes/reviews'
import { getServices } from './routes/services'
import { getMain } from './routes/main'
import { postForm } from './routes/send-form'

export const Api = {
  getMain: getMain,
  getResults: getResults,
  getPrices: getPrices,
  getReviews: getReviews,
  getServices: getServices,
  postRegForm: postForm,
}
