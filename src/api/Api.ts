import {getResults} from "./routes/results";
import {getPrices} from "./routes/prices";
import {getReviews} from "./routes/reviews";
import {getServices} from "./routes/services";
import {getMain} from "./routes/main";

export const Api = {
  main: getMain,
  results: getResults,
  prices: getPrices,
  reviews: getReviews,
  services: getServices
}