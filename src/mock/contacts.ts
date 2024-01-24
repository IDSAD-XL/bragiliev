import { IContactsContent } from '../types/content/pages/ContactsPage'

export const contactsContent: IContactsContent = {
  meta: {
    title:
      'Место работы Брагилева Вадима Алексеевича - пластического хирурга Grandmed',
    description:
      'Брагилев Вадим Алексеевич много лет принимает в клинике высшей категории &quot;Grandmed&quot; в г. Санкт-Петербурге на Садовой улице, д. 35',
  },
  layout: {
    header: {
      variant: 'dark',
      transparencyAtTop: true,
    },
  },
  titleBlock: {
    name: '[ Как найти ]',
    title: 'Контакты',
  },
  regFormBlock: {
    name: '[ Первичная консультация ]',
    title: 'Запись на прием',
    subtitle:
      'Личный менеджер свяжется с вами, чтобы подобрать удобное время для консультации',
  },
}
