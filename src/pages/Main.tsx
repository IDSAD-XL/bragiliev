import React from 'react'
import Layout from '../components/layout/Layout'
import PageHead from '../components/elements/PageHead'
import InfoBlock from '../components/elements/InfoBlock'
import { IMainContent } from '../types/content/MainPage'
import TabsInfo from '../components/elements/TabsInfo'
import Results from '../components/elements/Results'

// const mainContent: IMainContent = {}

interface IMain extends IMainContent {}

const Main: React.FC<IMain> = ({
  pageHead,
  infoBlock,
  servicesBlock,
  resultsBlock,
}) => {
  return (
    <Layout>
      <PageHead
        name={pageHead.name}
        title={pageHead.title}
        image={pageHead.image}
      >
        <p
          className="mt-[20px] text-light-gray md:mt-[17px] dsk:mt-[31px]"
          dangerouslySetInnerHTML={{ __html: pageHead.text ?? '' }}
        />
        <p className="mt-[20px] leading-[39px] md:mt-[41px] dsk:mt-[25px]">
          <span className="link-plus link-plus--white text-white">
            запись на прием
          </span>
        </p>
      </PageHead>
      <InfoBlock
        name={infoBlock.name}
        title={infoBlock.title}
        subtitle={infoBlock.subtitle}
        link={infoBlock.link}
      >
        {infoBlock.texts?.map((item, index) => {
          return (
            <span
              key={index}
              className="text-regular hidden dsk:block"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          )
        })}
      </InfoBlock>
      <TabsInfo tabs={servicesBlock.tabs} />
      <Results
        selects={resultsBlock.selects}
        name={resultsBlock.name}
        title={resultsBlock.title}
      />
    </Layout>
  )
}

export default Main
