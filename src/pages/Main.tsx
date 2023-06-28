import React from 'react'
import Layout from '../components/layout/Layout'
import PageHead from '../components/elements/PageHead'
import InfoBlock from '../components/elements/InfoBlock'
import { IMainContent } from '../types/content/MainPage'
import TabsInfo from '../components/elements/TabsInfo'
import Results from '../components/elements/Results'
import ReviewsBlock from '../components/elements/ReviewsBlock'
import InfoBlockWithImage from '../components/elements/InfoBlockWithImage'
import Link from 'next/link'
import QuestionsBlock from '../components/elements/QuestionsBlock'
import RegForm from '../components/elements/RegForm'

// const mainContent: IMainContent = {}

interface IMain extends IMainContent {}

const Main: React.FC<IMain> = ({
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
        results={resultsBlock.results}
        link={resultsBlock.link}
      />
      <ReviewsBlock
        name={reviewsBlock.name}
        title={reviewsBlock.title}
        slides={reviewsBlock.slides}
        link={reviewsBlock.link}
      />
      <InfoBlockWithImage
        name={aboutBlock.name}
        title={aboutBlock.title}
        image={aboutBlock.image}
        subtitle={aboutBlock.subtitle}
      >
        <div className="gap-y[45px] hidden flex-grow justify-end gap-x-[75px] md:flex md:flex-col dsk:flex-grow-0 dsk:flex-row dsk:flex-nowrap dsk:justify-start">
          {aboutBlock?.texts && aboutBlock.texts[0] && (
            <span
              className="mt-[20px] text-white md:mt-[17px] md:text-[#A3A3A3] dsk:mt-[31px] dsk:flex-[50%] dsk:text-white"
              dangerouslySetInnerHTML={{
                __html: aboutBlock.texts[0].text ?? '',
              }}
            />
          )}
          {aboutBlock?.texts && aboutBlock.texts[1] && (
            <span
              className="mt-[20px] text-white md:mt-[17px] md:text-[#A3A3A3] dsk:mt-[31px] dsk:flex-[50%] dsk:text-white"
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
      <QuestionsBlock
        name={questionsBlock.name}
        title={questionsBlock.title}
        questions={questionsBlock.questions}
      />
      <RegForm
        name={regFormBlock.name}
        title={regFormBlock.title}
        subtitle={regFormBlock.subtitle}
      />
    </Layout>
  )
}

export default Main
