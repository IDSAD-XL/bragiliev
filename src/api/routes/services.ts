import { servicesContent } from '../../mock/services'
import { ITabInfoItem } from '../../components/elements/statefull-components/TabsInfo'
import { IServices } from '../../pages/ServicesPage'
import { MetaData } from '../../types/content/pages/MetaData'

export const getServices = async (addPaths?: boolean): Promise<IServices> => {
  interface servicesDTO {
    meta: MetaData
    result: ITabInfoItem[]
  }

  try {
    const fetchUrl = 'https://grandmed.ru/ajax/api/services.php'
    const resp = await fetch(fetchUrl)
    const fetchData: servicesDTO = await resp.json()

    if (addPaths) {
      fetchData?.result?.forEach((tab) => {
        tab?.content?.forEach((item) => {
          if (item.link) item.link = `/services/${item.link}`
        })
      })
    }

    return {
      ...servicesContent,
      servicesBlock: { tabs: fetchData?.result?.slice(0, 3) },
    }
  } catch (e) {
    return servicesContent
  }
}
