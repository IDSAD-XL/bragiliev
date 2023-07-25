import { IAboutClinicContent } from '../types/content/pages/AboutClinicPage'

export const aboutClinicContent: IAboutClinicContent = {
  layout: {
    header: {
      variant: 'transparent',
      transparencyAtTop: true,
    },
  },
  pageHead: {
    variant: 'simple',
    title: `О клинике`,
    name: '[ GRANDMED ]',
    image: '/assets/about-clinic-bg.jpg',
    imageMobile: '/assets/about-clinic-bg-mobile.jpg',
    text: 'Я веду приём более 20 лет в клинике GRANDMED, и являюсь учредителем холдинга вместе с пятью выдающимися врачами.',
  },
  regFormBlock: {
    name: '[ Первичная консультация ]',
    title: 'Запись на прием',
    subtitle:
      'Наши операторы свяжутся с&nbsp;вами для&nbsp;выбора оптимального времени посещения',
  },
}
