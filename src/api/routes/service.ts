import { IService } from '../../pages/ServicePage'
import { serviceContent } from '../../mock/service'

export const getService = async (
  type: string,
  slug?: string
): Promise<IService> => {
  interface serviceDTO extends IService {
    infoBlock: {
      title: string
      announc: string
      content: string
      imgMobile: string
      imgDesktop: string
      tabs: IService['servicesBlock']
    }
  }

  try {
    if (!slug) slug = ''
    const fetchUrl = `https://grandmed.ru/ajax/api/service.php?id=/${type}/${
      slug ? slug + '/' : ''
    }`
    const resp = await fetch(fetchUrl)
    const fetchData: serviceDTO = await resp.json()

    return {
      meta: fetchData.meta,
      layout: serviceContent.layout,
      pageHead: {
        ...serviceContent.pageHead,
        title: fetchData.infoBlock.title,
        image: fetchData.infoBlock.imgDesktop,
        imageMobile: fetchData.infoBlock.imgMobile,
        text: fetchData.infoBlock.announc,
      },
      contentBlock: {
        name: '[ Об операции ]',
        color: 'white',
        blocks: [
          {
            key: 'IBlockWithTwoTextColumns',
            haveLeft: false,
            textsRight: [fetchData.infoBlock.content],
          },
        ],
      },
      pricesBlock: fetchData.pricesBlock,
      resultsBlock: fetchData.resultsBlock,
      servicesBlock: {},
      regFormBlock: serviceContent.regFormBlock,
    }
  } catch (e) {
    return serviceContent
  }
}
