import { IContactsContent } from '../types/content/pages/ContactsPage'

export const contactsContent: IContactsContent = {
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
      'Наши операторы свяжутся с&nbsp;вами для&nbsp;выбора оптимального времени посещения',
  },
}
