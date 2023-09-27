import {getResults} from "./routes/results";
import {getPrices} from "./routes/prices";
import {getReviews} from "./routes/reviews";
import {getServices} from "./routes/services";

export const Api = {
  results: getResults,
  prices: getPrices,
  reviews: getReviews,
  services: getServices
}