import React, { useEffect, useState } from 'react'
import Accordion from '../stateless-components/Accordion'

interface AccordionData {
  key: number
  name: string
  text: string
}

interface IFormattableContent {
  content: string
}

const FormattableContent: React.FC<IFormattableContent> = ({ content }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [accordionData, setAccordionData] = useState<AccordionData[]>([])
  const [formattedContent, setFormattedContent] = useState<string | null>(null)

  useEffect(() => {
    const div = document.createElement('div')
    div.innerHTML = content

    const extractedData: AccordionData[] = []
    const accordionTitles = div.querySelectorAll('.title-accordion')

    accordionTitles.forEach((titleElement, index) => {
      const title = titleElement.textContent?.trim() ?? ''
      const content = titleElement.nextElementSibling?.innerHTML ?? ''

      extractedData.push({
        key: index,
        name: title,
        text: content,
      })
    })

    setAccordionData(extractedData)

    const formattedHtml = content?.replace(
      /<h3 class="title-accordion">(.*?)<\/h3>\s*<div class="content-accordion">(.*?)<\/div>/gs,
      ''
    )

    setFormattedContent(formattedHtml)
  }, [content])

  return (
    <div className="formattable-content">
      {accordionData.map((item, key) => (
        <Accordion
          key={item.key}
          name={item.name}
          text={item.text}
          open={key === activeAccordion}
          onClick={() => {
            if (activeAccordion === key) {
              setActiveAccordion(null)
            } else {
              setActiveAccordion(key)
            }
          }}
        />
      ))}
      {formattedContent && (
        <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
      )}
    </div>
  )
}

export default FormattableContent
