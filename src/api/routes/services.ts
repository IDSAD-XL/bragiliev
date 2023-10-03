import { servicesContent } from '../../mock/services'
import { ITabInfoItem } from '../../components/elements/statefull-components/TabsInfo'
import { IServices } from '../../pages/ServicesPage'

export const getServices = async (): Promise<IServices> => {
  try {
    const fetchUrl = 'https://grandmed.ru/ajax/api/services.php'
    const resp = await fetch(fetchUrl)
    const fetchData: ITabInfoItem[] = await resp.json()

    return {
      ...servicesContent,
      servicesBlock: { tabs: fetchData.slice(0, 3) },
    }
  } catch (e) {
    return servicesContent
  }
}
