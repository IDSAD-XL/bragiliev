import { IReviewsContent } from '../types/content/pages/ReviewsPage'

export const reviewsContent: IReviewsContent = {
  layout: {
    header: {
      variant: 'light',
    },
  },
  infoBlock: {
    name: '[ обратная связь ]',
    title: 'Отзывы',
  },
  filtersReviewsBlock: {
    selects: [
      {
        placeholder: 'Часть тела',
        variants: [
          {
            id: '1',
            value: 'Лицо',
          },
          {
            id: '2',
            value: 'Грудь',
          },
          {
            id: '3',
            value: 'Тело',
          },
        ],
      },
      {
        placeholder: 'Операция',
        variants: [
          {
            id: '1',
            value: 'Лицо 1',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '2',
            value: 'Лицо 2',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '3',
            value: 'Лицо 3',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '4',
            value: 'Лицо 4',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '5',
            value: 'Лицо 5',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '6',
            value: 'Грудь 1',
            dependencies: [
              {
                id: '2',
                key: 'part',
              },
            ],
          },
          {
            id: '7',
            value: 'Грудь 2',
            dependencies: [
              {
                id: '2',
                key: 'part',
              },
            ],
          },
          {
            id: '8',
            value: 'Грудь 3',
            dependencies: [
              {
                id: '2',
                key: 'part',
              },
            ],
          },
          {
            id: '9',
            value: 'Тело 1',
            dependencies: [
              {
                id: '3',
                key: 'part',
              },
            ],
          },
        ],
      },
    ],
    slides: [
      {
        id: '1',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '1',
            key: 'operation',
          },
        ],
      },
      {
        id: '2',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '1',
            key: 'operation',
          },
        ],
      },
      {
        id: '3',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '1',
            key: 'operation',
          },
        ],
      },
      {
        id: '4',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '1',
            key: 'operation',
          },
        ],
      },
      {
        id: '5',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '1',
            key: 'operation',
          },
        ],
      },
      {
        id: '6',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '1',
            key: 'operation',
          },
        ],
      },
      {
        id: '7',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '1',
            key: 'operation',
          },
        ],
      },
      {
        id: '8',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '1',
            key: 'operation',
          },
        ],
      },
      {
        id: '9',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '2',
            key: 'operation',
          },
        ],
      },
      {
        id: '10',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '2',
            key: 'operation',
          },
        ],
      },
      {
        id: '11',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '2',
            key: 'operation',
          },
        ],
      },
      {
        id: '12',
        date: '[ 01/12/22 ]',
        name: 'Анастасия Макеева',
        content:
          'Мне&nbsp;все понравилось, все&nbsp;безупречно. Только положительные отзывы, Прием состоялся вовремя, задержек не&nbsp;было. Специалиста я&nbsp;выбирал по&nbsp;отзывам на&nbsp;сайте СберЗдоровье, по&nbsp;рейтингу.',
        link: '/',
        image: '/assets/review-icon.png',
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '2',
            key: 'operation',
          },
        ],
      },
    ],
  },
  regFormBlock: {
    name: '[ Первичная консультация ]',
    title: 'Запись на прием',
    subtitle:
      'Наши операторы свяжутся с&nbsp;вами для&nbsp;выбора оптимального времени посещения',
  },
}
