import React from 'react'
import Layout from '../components/layout/Layout'
import PageHead from '../components/elements/static-blocks/PageHead'
import InfoBlock from '../components/elements/static-blocks/InfoBlock'
import { IMainContent } from '../types/content/pages/MainPage'
import TabsInfo from '../components/elements/statefull-components/TabsInfo'
import Results from '../components/elements/statefull-components/Results'
import ReviewsBlock from '../components/elements/static-blocks/ReviewsBlock'
import InfoBlockWithImage from '../components/elements/static-blocks/InfoBlockWithImage'
import Link from 'next/link'
import QuestionsBlock from '../components/elements/statefull-components/QuestionsBlock'
import RegForm from '../components/elements/statefull-components/RegForm'

// const mainContent: IMainContent = {}

export interface IMain extends IMainContent {}

const MainPage: React.FC<IMain> = ({
  layout,
  pageHead,
  infoBlock,
  servicesBlock,
  resultsBlock,
  reviewsBlock,
  aboutBlock,
  questionsBlock,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <PageHead {...pageHead}>
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
      <TabsInfo {...servicesBlock} spacing={'big'} variant={'halfScreen'} />
      <Results {...resultsBlock} spacing={'small'} />
      <ReviewsBlock {...reviewsBlock} />
      <InfoBlockWithImage {...aboutBlock}>
        <div className="gap-y[45px] hidden flex-grow justify-end gap-x-[75px] md:flex md:flex-col dsk:flex-grow-0 dsk:flex-row dsk:flex-nowrap dsk:justify-start">
          {aboutBlock?.texts && aboutBlock.texts[0] && (
            <span
              className="mt-[20px] text-white md:mt-[17px] dsk:mt-[31px] dsk:flex-[50%]"
              dangerouslySetInnerHTML={{
                __html: aboutBlock.texts[0].text ?? '',
              }}
            />
          )}
          {aboutBlock?.texts && aboutBlock.texts[1] && (
            <span
              className="mt-[20px] text-white md:mt-[17px] dsk:mt-[31px] dsk:flex-[50%]"
              dangerouslySetInnerHTML={{
                __html: aboutBlock.texts[1].text ?? '',
              }}
            />
          )}
        </div>
        <p className="mt-[20px] leading-[39px] md:mt-[41px] dsk:mt-[48px]">
          <Link href="/" className="link-plus link-plus--white text-white">
            Узнать больше
          </Link>
        </p>
      </InfoBlockWithImage>
      <QuestionsBlock {...questionsBlock} />
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default MainPage
