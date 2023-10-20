import React, { useState } from 'react'
import { IDocumentsPageContent } from '../types/content/pages/Documents'
import Layout from '../components/layout/Layout'
import Accordion from '../components/elements/stateless-components/Accordion'

export interface IDocuments extends IDocumentsPageContent {}

const Documents: React.FC<IDocuments> = ({ layout, accordions }) => {
  const [openAccordion, setAccordion] = useState<number | null>(0)

  return (
    <Layout {...layout}>
      <div className="flex w-full justify-center">
        <div className="container pt-[100px]">
          <h1 className="pb-[30px]">Документы</h1>
          {accordions?.map((accordion, index) => (
            <Accordion
              key={index}
              open={openAccordion === index}
              onClick={() => {
                if (openAccordion === index) {
                  setAccordion(null)
                } else {
                  setAccordion(index)
                }
              }}
              {...accordion}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Documents
