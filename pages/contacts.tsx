import React from 'react'
import ContactsPage from '../src/pages/ContactsPage'
import { contactsContent } from '../src/mock/contacts'

const ContactsNextPage: React.FC = () => {
  return <ContactsPage {...contactsContent} />
}

export default ContactsNextPage
