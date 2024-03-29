import { IAboutClinicContent } from '../types/content/pages/AboutClinicPage'

export const aboutClinicContent: IAboutClinicContent = {
  meta: {
    title:
      'Клиника высшей категории GRANDMED - это многопрофильный медицинский центр в Санкт-Петербурге',
    description:
      'Клиника высшей категории GRANDMED - это многопрофильный медицинский центр. Специалисты клиники: от пластических хирургов и косметологов до врачей стоматологов, помогают людям усовершенствовать свой внешний облик',
  },
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
    text: 'Я веду прием более 20 лет в клинике GRANDMED, и являюсь учредителем холдинга вместе с пятью выдающимися врачами.',
  },
  aboutClinicBlocks: [
    {
      variant: 'white',
      title: 'Как клиника за 20 лет стала супербрендом',
      name: '[ ИСТОРИЯ ]',
      image: '/assets/about-clinic/gm-doctors.jpg',
      imageMobile: '/assets/about-clinic/gm-doctors-mobile.jpg',
      text: 'Сегодня GRANDMED – узнаваемый бренд, который уже полюбили несколько поколений пациентов.',
      desc: [
        {
          text: '20 лет назад четыре хирурга, выпускника Военно-Медицинской Академии, – Вадим Брагилев, Алексей Украинский, Сергей Швырев, Александр Шумило — и врач-анестезиолог Михаил Альтшуллер решили основать собственную клинику, где могли бы применить свой бесценный и разнообразный опыт в сфере красоты и молодости.',
        },
      ],
    },
    {
      variant: 'white',
      title: 'Для чего создавалась клиника',
      subTitle:
        'Эстетическая медицина многозадачна. Все должно начинаться как в театре — с вешалки. Вот пройдите по нашей клинике. Посмотрите, как у нас обустроены рецепции, кабинеты, палаты и операционные. Точнее — оформлены. Как подобраны картины, цветовые решения, какой свет. В этом во всем есть эстетика. А посмотрите на наших врачей, медсестер, администраторов! Нельзя творить и дарить прекрасное без чувства прекрасного вокруг и внутри себя.',
      name: '[ ИСТОРИЯ ]',
      imageSmall: '/assets/about-clinic/doc-small.jpg',
      text: 'Основой философии клиники GRANDMED с самого начала было желание делать людей лучше и счастливей.',
      desc: [
        {
          text: 'Ценность человеческой жизни — неоспорима, но красота, если ее утратить, лишает человека той искры, которая им движет. При этом с первого дня создатели клиники вносили эстетику во все, в том числе в оформление ее пространства. «Нельзя творить и дарить прекрасное без чувства прекрасного вокруг и внутри себя» – таков девиз клиники с первого дня.',
        },
      ],
    },
    {
      variant: 'gray',
      title: 'Врач – пациент',
      name: '[ ИСТОРИЯ ]',
      image: '/assets/about-clinic/doctors90th.jpg',
      imageMobile: '/assets/about-clinic/doctors90th-mobile.jpg',
      text: 'В 2000 году друзья-коллеги основали свою клинику – GRANDMED',
      desc: [
        {
          text: 'Закончив Военно-Медицинскую Академию, получив опыт работы военных хирургов в самых разных частях страны и родах войск, они объединились благодаря известному хирургу, профессору А.Е. Белоусову.',
        },
        {
          text: 'Стажировка в Америке, соавторство в создании первого современного практического руководства по пластической реконструктивной и эстетической хирургии, интенсивная практика и непрерывное повышение квалификации — так промчались 1990-е годы.',
        },
      ],
      additionally: {
        text: 'За 20 лет GRANDMED стала клиникой мечты не только для ее создателей и сотрудников, но и для пациентов.',
        subtext:
          'Сюда уже ходят и дети, и даже внуки первых пациентов. Каждый врач стремится дать человеку, который к нему пришел, не только желаемый результат, но и правильные эмоции.',
      },
    },
    {
      variant: 'white',
      title: 'Форварды медицины',
      name: '[ ИСТОРИЯ ]',
      image: '/assets/about-clinic/ward.jpg',
      imageMobile: '/assets/about-clinic/ward-mobile.jpg',
      text: 'GRANDMED не просто клиника эстетической медицины: ее команду можно назвать форвардами индустрии, задающими тренды.',
      desc: [
        {
          text: 'Хирурги GRANDMED одни из первых делали глубокую подтяжку лица, после которой не требовалось никаких повязок. Они одни из первых делали увеличение груди через разрез около пупка. Они в числе первых начали в операционной работать в тандеме с косметологами, которые тут применяют лазер или Альтеру. Уловив новый тренд, они также в числе первых стали внедрять технологию по обработки жировой ткани для последующего ее использования в качестве филлера.',
        },
      ],
      noPadBottom: true,
    },
    {
      variant: 'gray',
      title: 'GRANDMED сегодня',
      name: '[ ИСТОРИЯ ]',
      image: '/assets/about-clinic/doc.jpg',
      imageMobile: '/assets/about-clinic/doc-mobile.jpg',
      text: 'Клиника начиналась с главной специализации ее основателей – с реконструктивной хирургии.',
      desc: [
        {
          text: 'Врачи GRANDMED помогали людям, пострадавшим от серьезных травм. В результате сложные случаи и стали уникальной чертой клиники. Благодаря почти 30-летнему опыту хирургов здесь и сейчас берутся за реконструкцию лица после ожогов и аварий, а также за повторные операции после неудачных манипуляций.',
        },
        {
          text: 'Кстати, в таких сложных случаях хирург неизменно работает в тандеме с косметологом. Одним словом, в список хирургических манипуляций «Grandmed» входит полный спектр пластики лица, груди и тела.',
        },
      ],
      additionally: {
        text: 'За 20 лет GRANDMED стала клиникой мечты не только для ее создателей и сотрудников, но и для пациентов.',
        subtext:
          'Сюда уже ходят и дети, и даже внуки первых пациентов. Каждый врач стремится дать человеку, который к нему пришел, не только желаемый результат, но и правильные эмоции.',
      },
    },
  ],
  regFormBlock: {
    name: '[ Первичная консультация ]',
    title: 'Запись на прием',
    subtitle:
      'Личный менеджер свяжется с вами, чтобы подобрать удобное время для консультации',
  },
}
