import { IPricePageContent } from '../types/content/PricePage'

export const priceContent: IPricePageContent = {
  titleBlock: {
    name: '[ прайс ]',
    title: 'Стоимость',
  },
  filtersPriceBlock: {
    selects: [
      {
        placeholder: 'Часть тела',
        variants: [
          {
            id: 1,
            name: 'Лицо',
          },
          {
            id: 2,
            name: 'Грудь',
          },
          {
            id: 3,
            name: 'Тело',
          },
        ],
      },
      {
        placeholder: 'Операция',
        variants: [
          {
            id: 1,
            name: 'Лицо 1',
            dependencies: [
              {
                id: 1,
                key: 'part',
              },
            ],
          },
          {
            id: 2,
            name: 'Лицо 2',
            dependencies: [
              {
                id: 1,
                key: 'part',
              },
            ],
          },
          {
            id: 3,
            name: 'Лицо 3',
            dependencies: [
              {
                id: 1,
                key: 'part',
              },
            ],
          },
          {
            id: 4,
            name: 'Лицо 4',
            dependencies: [
              {
                id: 1,
                key: 'part',
              },
            ],
          },
          {
            id: 5,
            name: 'Лицо 5',
            dependencies: [
              {
                id: 1,
                key: 'part',
              },
            ],
          },
          {
            id: 6,
            name: 'Грудь 1',
            dependencies: [
              {
                id: 2,
                key: 'part',
              },
            ],
          },
          {
            id: 7,
            name: 'Грудь 2',
            dependencies: [
              {
                id: 2,
                key: 'part',
              },
            ],
          },
          {
            id: 8,
            name: 'Грудь 3',
            dependencies: [
              {
                id: 2,
                key: 'part',
              },
            ],
          },
          {
            id: 9,
            name: 'Тело 1',
            dependencies: [
              {
                id: 3,
                key: 'part',
              },
            ],
          },
        ],
      },
    ],
    services: [
      {
        id: 1,
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 3,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 4,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 6,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 7,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 9,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
        ],
        dependencies: [
          {
            id: 1,
            key: 'part',
          },
          {
            id: 1,
            key: 'operation',
          },
        ],
      },
      {
        id: 2,
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 3,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 4,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 6,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 7,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 9,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
        ],
        dependencies: [
          {
            id: 1,
            key: 'part',
          },
          {
            id: 1,
            key: 'operation',
          },
        ],
      },
      {
        id: 3,
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 3,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 4,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 6,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 7,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 9,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
        ],
        dependencies: [
          {
            id: 1,
            key: 'part',
          },
          {
            id: 1,
            key: 'operation',
          },
        ],
      },
      {
        id: 4,
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 3,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 4,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 6,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 7,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 9,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
        ],
        dependencies: [
          {
            id: 2,
            key: 'part',
          },
          {
            id: 6,
            key: 'operation',
          },
        ],
      },
      {
        id: 5,
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 3,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 4,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 6,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 7,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 9,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
        ],
        dependencies: [
          {
            id: 2,
            key: 'part',
          },
          {
            id: 6,
            key: 'operation',
          },
        ],
      },
      {
        id: 6,
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 3,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 4,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 6,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 7,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 9,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
        ],
        dependencies: [
          {
            id: 1,
            key: 'part',
          },
          {
            id: 2,
            key: 'operation',
          },
        ],
      },
      {
        id: 7,
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 3,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 4,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 6,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 7,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 9,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
        ],
        dependencies: [
          {
            id: 1,
            key: 'part',
          },
          {
            id: 2,
            key: 'operation',
          },
        ],
      },
      {
        id: 1,
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 3,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 4,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 6,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 7,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 9,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
        ],
        dependencies: [
          {
            id: 1,
            key: 'part',
          },
          {
            id: 2,
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
