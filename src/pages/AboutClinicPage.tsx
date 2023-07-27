import React from 'react'
import Layout from '../components/layout/Layout'
import PageHead from '../components/elements/PageHead'
import AboutClinicBlock from '../components/elements/AboutClinicBlock'
import { IAboutClinicContent } from '../types/content/pages/AboutClinicPage'
import RegForm from '../components/elements/RegForm'

interface IAboutClinic extends IAboutClinicContent {}

const AboutClinicPage: React.FC<IAboutClinic> = ({
  layout,
  pageHead,
  aboutClinicBlocks,
  regFormBlock,
}) => {
  return (
    <Layout {...layout}>
      <PageHead {...pageHead}>
        <p
          className="mt-[20px] text-[18px] font-medium leading-[28px] md:mt-[17px] dsk:mt-[31px]"
          dangerouslySetInnerHTML={{ __html: pageHead.text ?? '' }}
        />
      </PageHead>
      {aboutClinicBlocks.map((item, index) => {
        const isMoreThanOneDesc: boolean = item.desc.length > 1

        return (
          <AboutClinicBlock key={index} {...item}>
            <div
              className={`${
                isMoreThanOneDesc ? 'dsk:flex-col' : 'dsk:flex-row'
              } mb-[30px] flex flex-[50%] flex-col gap-[30px] gap-[30px] dsk:mb-[93px] dsk:mt-[30px] dsk:justify-between`}
            >
              {!!item.text && (
                <h5
                  className={`${
                    isMoreThanOneDesc ? 'dsk:w-[885px]' : 'dsk:w-[566px]'
                  } mt-[30px]  text-[18px] leading-[28px] dsk:mt-[0] dsk:w-[566px] dsk:min-w-[566px] dsk:text-[30px] dsk:leading-[135%] dsk:tracking-[1px]`}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              )}
              <div
                className={`${
                  isMoreThanOneDesc ? 'dsk:mt-[49px]' : ''
                } flex flex-col gap-[30px] dsk:flex dsk:flex-row dsk:justify-end dsk:gap-[138px]`}
              >
                {!!item.desc &&
                  item.desc.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-[14px] font-[500] leading-[22px] dsk:w-[461px] dsk:min-w-[461px]"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    )
                  })}
              </div>
            </div>
          </AboutClinicBlock>
        )
      })}
      <RegForm {...regFormBlock} />
    </Layout>
  )
}

export default AboutClinicPage
