import React from 'react'
import { GetStaticPropsContext } from 'next'
import { Api } from '../../src/api/Api'
import ServicePage, { IService } from '../../src/pages/ServicePage'

interface pageProps {
  data: IService
}

const ServiceNextPage: React.FC<pageProps> = ({ data }) => {
  return <ServicePage {...data} />
}

export default ServiceNextPage

export async function getStaticPaths() {
  const services = await Api.getServices()
  const tabs = services?.servicesBlock?.tabs
  const paths = tabs?.map((tab) => {
    return { params: { type: tab?.link?.split('/')[1] } }
  })

  return { paths: paths?.flat(1), fallback: 'blocking' }
}

export const getStaticProps = async (param: GetStaticPropsContext) => {
  if (typeof param.params !== 'object') return
  const type = param.params.type

  if (!type) return
  const data = await Api.getService(String(type))

  return {
    props: { data },
    revalidate: 60,
  }
}
