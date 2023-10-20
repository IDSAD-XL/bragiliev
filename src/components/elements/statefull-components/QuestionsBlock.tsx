import React, { useState } from 'react'
import Accordion, { IAccordionContent } from '../stateless-components/Accordion'

export interface IQuestionsBlock {
  name?: string
  title?: string
  questions?: IAccordionContent[]
}

const QuestionsBlock: React.FC<IQuestionsBlock> = ({
  name,
  title,
  questions,
}) => {
  const [openQuestion, setQuestion] = useState<number | null>(null)

  return (
    <div className="flex w-full justify-center bg-secondary dsk:justify-center">
      <div className="container mb-[60px] mt-[60px] flex flex-col md:mb-[90px] md:mt-[90px]">
        {!!name && (
          <p className="text-section-title mb-[10px] md:mb-[20px]">
            {name ?? ''}
          </p>
        )}
        {!!title && (
          <h2
            className="mb-[3px] flex h-[85px] items-center md:mb-[33px] dsk:mb-[48px]"
            dangerouslySetInnerHTML={{ __html: title ?? '' }}
          />
        )}
        <div className="grid grid-cols-1 gap-x-[20px] gap-y-[25px] lg:grid-cols-2">
          {questions?.map((item, index) => {
            return (
              <Accordion
                key={index}
                name={item.name}
                text={item.text}
                open={openQuestion === index}
                onClick={() => {
                  if (openQuestion === index) {
                    setQuestion(null)
                  } else {
                    setQuestion(index)
                  }
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default QuestionsBlock
