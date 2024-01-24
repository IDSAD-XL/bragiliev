import { IPricePageContent } from '../types/content/pages/PricePage'

export const priceContent: IPricePageContent = {
  layout: {
    header: {
      variant: 'light',
    },
  },
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
            value: 'Ринопластика',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '2',
            value: 'Ринопластика 2',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '3',
            value: 'Ринопластика 3',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '4',
            value: 'Ринопластика 4',
            dependencies: [
              {
                id: '1',
                key: 'part',
              },
            ],
          },
          {
            id: '5',
            value: 'Ринопластика 5',
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
    services: [
      {
        id: '1',
        title: 'Ринопластика',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Реконструкция носа',
            price: '200 000',
          },
          {
            id: 3,
            subtitle: 'Пластика носа с костным этапом',
            price: '65 000',
          },
          {
            id: 4,
            subtitle: 'Пластика кончика носа',
            price: '80 000',
          },
          {
            id: 5,
            subtitle: 'Повторная ринопластика',
            price: '150 000',
          },
          {
            id: 6,
            subtitle: 'Септопластика',
            price: '200 000',
          },
          {
            id: 7,
            subtitle: 'Реконструкция носовой перегородки',
            price: '65 500',
          },
          {
            id: 8,
            subtitle: 'Полипэктомия',
            price: '80 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
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
        title: 'Ринопластика 2',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Реконструкция носа',
            price: '200 000',
          },
          {
            id: 3,
            subtitle: 'Пластика носа с костным этапом',
            price: '65 000',
          },
          {
            id: 4,
            subtitle: 'Пластика кончика носа',
            price: '80 000',
          },
          {
            id: 7,
            subtitle: 'Реконструкция носовой перегородки',
            price: '65 500',
          },
          {
            id: 8,
            subtitle: 'Полипэктомия',
            price: '80 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
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
        id: '3',
        title: 'Ринопластика 3',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Реконструкция носа',
            price: '200 000',
          },
          {
            id: 3,
            subtitle: 'Пластика носа с костным этапом',
            price: '65 000',
          },
          {
            id: 4,
            subtitle: 'Пластика кончика носа',
            price: '80 000',
          },
          {
            id: 5,
            subtitle: 'Повторная ринопластика',
            price: '150 000',
          },
          {
            id: 6,
            subtitle: 'Септопластика',
            price: '200 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '3',
            key: 'operation',
          },
        ],
      },
      {
        id: '4',
        title: 'Ринопластика 4',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 5,
            subtitle: 'Повторная ринопластика',
            price: '150 000',
          },
          {
            id: 6,
            subtitle: 'Септопластика',
            price: '200 000',
          },
          {
            id: 7,
            subtitle: 'Реконструкция носовой перегородки',
            price: '65 500',
          },
          {
            id: 8,
            subtitle: 'Полипэктомия',
            price: '80 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '4',
            key: 'operation',
          },
        ],
      },
      {
        id: '5',
        title: 'Ринопластика 5',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 8,
            subtitle: 'Полипэктомия',
            price: '80 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
        dependencies: [
          {
            id: '1',
            key: 'part',
          },
          {
            id: '5',
            key: 'operation',
          },
        ],
      },
      {
        id: '6',
        title: 'Грудь',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Реконструкция носа',
            price: '200 000',
          },
          {
            id: 3,
            subtitle: 'Пластика носа с костным этапом',
            price: '65 000',
          },
          {
            id: 4,
            subtitle: 'Пластика кончика носа',
            price: '80 000',
          },
          {
            id: 5,
            subtitle: 'Повторная ринопластика',
            price: '150 000',
          },
          {
            id: 6,
            subtitle: 'Септопластика',
            price: '200 000',
          },
          {
            id: 7,
            subtitle: 'Реконструкция носовой перегородки',
            price: '65 500',
          },
          {
            id: 8,
            subtitle: 'Полипэктомия',
            price: '80 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
        dependencies: [
          {
            id: '2',
            key: 'part',
          },
          {
            id: '6',
            key: 'operation',
          },
        ],
      },
      {
        id: '7',
        title: 'Грудь 2',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Реконструкция носа',
            price: '200 000',
          },
          {
            id: 3,
            subtitle: 'Пластика носа с костным этапом',
            price: '65 000',
          },
          {
            id: 4,
            subtitle: 'Пластика кончика носа',
            price: '80 000',
          },
          {
            id: 5,
            subtitle: 'Повторная ринопластика',
            price: '150 000',
          },
          {
            id: 6,
            subtitle: 'Септопластика',
            price: '200 000',
          },
          {
            id: 7,
            subtitle: 'Реконструкция носовой перегородки',
            price: '65 500',
          },
          {
            id: 8,
            subtitle: 'Полипэктомия',
            price: '80 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
        dependencies: [
          {
            id: '2',
            key: 'part',
          },
          {
            id: '7',
            key: 'operation',
          },
        ],
      },
      {
        id: '8',
        title: 'Грудь 3',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Реконструкция носа',
            price: '200 000',
          },
          {
            id: 3,
            subtitle: 'Пластика носа с костным этапом',
            price: '65 000',
          },
          {
            id: 4,
            subtitle: 'Пластика кончика носа',
            price: '80 000',
          },
          {
            id: 5,
            subtitle: 'Повторная ринопластика',
            price: '150 000',
          },
          {
            id: 6,
            subtitle: 'Септопластика',
            price: '200 000',
          },
          {
            id: 7,
            subtitle: 'Реконструкция носовой перегородки',
            price: '65 500',
          },
          {
            id: 8,
            subtitle: 'Полипэктомия',
            price: '80 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
        dependencies: [
          {
            id: '2',
            key: 'part',
          },
          {
            id: '8',
            key: 'operation',
          },
        ],
      },
      {
        id: '9',
        title: 'Тело',
        prices: [
          {
            id: 1,
            subtitle: 'Пластика крыльев носа',
            price: '45 000',
          },
          {
            id: 2,
            subtitle: 'Реконструкция носа',
            price: '200 000',
          },
          {
            id: 3,
            subtitle: 'Пластика носа с костным этапом',
            price: '65 000',
          },
          {
            id: 4,
            subtitle: 'Пластика кончика носа',
            price: '80 000',
          },
          {
            id: 5,
            subtitle: 'Повторная ринопластика',
            price: '150 000',
          },
          {
            id: 6,
            subtitle: 'Септопластика',
            price: '200 000',
          },
          {
            id: 7,
            subtitle: 'Реконструкция носовой перегородки',
            price: '65 500',
          },
          {
            id: 8,
            subtitle: 'Полипэктомия',
            price: '80 000',
          },
          {
            id: 9,
            subtitle: 'Лечение храпа / увулопалатофарингопластика',
            price: '150 000',
          },
        ],
        dependencies: [
          {
            id: '3',
            key: 'part',
          },
          {
            id: '9',
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
      'Личный менеджер свяжется с вами, чтобы подобрать удобное время для консультации',
  },
}
