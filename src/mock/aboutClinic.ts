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
    image: '/assets/about-clinic/about-clinic-bg.jpg',
    imageMobile: '/assets/about-clinic/about-clinic-bg-mobile.jpg',
    text: 'Я веду приём более 20 лет в клинике GRANDMED, и являюсь учредителем холдинга вместе с пятью выдающимися врачами.',
  },
  aboutClinicBlock: {
    variant: 'first',
    title: 'Как клиника за 20 лет стала супербрендом',
    name: '[ ИСТОРИЯ ]',
    image: '/assets/about-clinic/gm-doctors.jpg',
    imageMobile: '/assets/about-clinic/gm-doctors-mobile.jpg',
    text: 'Сегодня «ГрандМед» – узнаваемый бренд, который уже полюбили несколько поколений пациентов.',
    subtext:
      '20 лет назад четыре хирурга, выпускника Военно-Медицинской Академии, – Вадим Брагилев, Алексей Украинский, Сергей Швырев, Александр Шумило — и врач-анестезиолог Михаил Альтшуллер решили основать собственную клинику, где могли бы применить свой бесценный и разнообразный опыт в сфере красоты и молодости.',
  },
  regFormBlock: {
    name: '[ Первичная консультация ]',
    title: 'Запись на прием',
    subtitle:
      'Наши операторы свяжутся с&nbsp;вами для&nbsp;выбора оптимального времени посещения',
  },
}
