import { IAboutContent } from '../types/content/pages/AboutPage'

export const aboutContent: IAboutContent = {
  layout: {
    header: {
      variant: 'dark',
      transparencyAtTop: true,
    },
  },
  pageHead: {
    variant: 'simple',
    name: '[ Брагилев ]',
    image: '/assets/about-1.jpg',
    text: 'Меня зовут Брагилев Вадим Алексеевич.&nbsp;Я пластический хирург, врач высшей категории клиники Grandmed. <br/> Своей профессии я посвятил уже более 30 лет &nbsp;и выполнил тысячи операций на лице и теле.',
    title: 'Обо мне',
  },
  contentSections: [
    {
      name: '[ история ]',
      title: 'С чего все начиналось',
      color: 'white',
      blocks: [
        {
          key: 'IFullsizeImage',
          src: '/assets/about-2.png',
        },
      ],
    },
  ],
  regFormBlock: {
    name: '[ Первичная консультация ]',
    title: 'Запись на прием',
    subtitle:
      'Наши операторы свяжутся с&nbsp;вами для&nbsp;выбора оптимального времени посещения',
  },
}
