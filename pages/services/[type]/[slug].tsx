import React from 'react'
import { Api } from '../../../src/api/Api'
import ServicePage, { IService } from '../../../src/pages/ServicePage'
import { GetStaticPropsContext } from 'next'

interface pageProps {
  data: IService
}

const ServiceNextPage: React.FC<pageProps> = ({ data }) => {
  return <ServicePage {...data} />
}

export default ServiceNextPage

export async function getStaticPaths() {
  const services = await Api.getServices(false)
  const tabs = services?.servicesBlock?.tabs
  const paths = tabs?.map((tab) => {
    return tab?.content.map((item) => {
      const type = item?.link?.split('/')[1]
      const slug = item?.link?.split('/')[2]
      return { params: { type, slug } }
    })
  })

  return { paths: paths?.flat(1), fallback: 'blocking' }
}

export const getStaticProps = async (param: GetStaticPropsContext) => {
  if (typeof param.params !== 'object') return
  const type = param.params.type
  const slug = param.params.slug
  if (!type) return
  const data = await Api.getService(String(type), String(slug))

  return {
    props: { data },
    revalidate: 60,
  }
}
