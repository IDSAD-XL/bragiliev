import {ISelectContent} from "../../components/elements/stateless-components/Select";
import {IPrice} from "../../pages/PricePage";
import {
  IFiltersPriceBlock,
  IPriceItem
} from "../../components/elements/statefull-components/FiltersPriceBlock";
import {priceContent} from "../../mock/price";

export const getPrices = async (): Promise<IPrice> => {
  try {
    interface pricesDTO {
      selects: ISelectContent[],
      services: IPriceItem[]
    }

    const fetchUrl = 'https://grandmed.ru/ajax/api/prices.php'
    const resp = await fetch(fetchUrl)
    const fetchData: pricesDTO = await resp.json()

    const pricesData: IFiltersPriceBlock = {
      selects: fetchData?.selects,
      services: fetchData?.services
    }

    return { ...priceContent, filtersPriceBlock: pricesData }
  } catch (e) {
    return priceContent
  }
}