import React from 'react'
import ContactsPage from '../src/pages/ContactsPage'
import { contactsContent } from '../src/mock/contacts'
import Metadata from '../src/components/layout/Metadata'

const ContactsNextPage: React.FC = () => {
  return (
    <>
      <Metadata
        title={contactsContent?.meta?.title}
        description={contactsContent?.meta?.description}
      />
      <ContactsPage {...contactsContent} />
    </>
  )
}

export default ContactsNextPage
