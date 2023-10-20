import React from 'react'
import Metadata from '../src/components/layout/Metadata'
import Documents from '../src/pages/Documents'
import { documentsContent } from '../src/mock/documents'
const DocumentsPage: React.FC = () => {
  return (
    <>
      <Metadata
        title={documentsContent.meta?.title}
        description={documentsContent.meta?.description}
      />
      <Documents {...documentsContent} />
    </>
  )
}

export default DocumentsPage
