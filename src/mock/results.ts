import { IResultsPageContent } from '../types/content/ResultsPage'

export const resultsContent: IResultsPageContent = {
  resultsBlock: {
    name: '[ кейсы ]',
    title: 'До/После',
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
    results: [
      {
        id: 1,
        title: 'Ринопластика 1',
        subtitle: 'Закрытая хранящая риносептопластика, 1 год после операции',
        images: {
          before1: '/assets/main-res-1.png',
          before2: '/assets/main-res-1.png',
          after1: '/assets/main-res-2.png',
          after2: '/assets/main-res-2.png',
        },
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
        title: 'Ринопластика 2',
        subtitle: 'Закрытая хранящая риносептопластика, 1 год после операции',
        images: {
          before1: '/assets/main-res-1.png',
          before2: '/assets/main-res-1.png',
          after1: '/assets/main-res-2.png',
          after2: '/assets/main-res-2.png',
        },
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
        title: 'Ринопластика 3',
        subtitle: 'Закрытая хранящая риносептопластика, 1 год после операции',
        images: {
          before1: '/assets/main-res-1.png',
          before2: '/assets/main-res-1.png',
          after1: '/assets/main-res-2.png',
          after2: '/assets/main-res-2.png',
        },
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
        title: 'Операция 2',
        subtitle: 'Закрытая хранящая риносептопластика, 1 год после операции',
        images: {
          before1: '/assets/main-res-1.png',
          before2: '/assets/main-res-1.png',
          after1: '/assets/main-res-2.png',
          after2: '/assets/main-res-2.png',
        },
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
        title: 'Операция 3',
        subtitle: 'Закрытая хранящая риносептопластика, 1 год после операции',
        images: {
          before1: '/assets/main-res-1.png',
          before2: '/assets/main-res-1.png',
          after1: '/assets/main-res-2.png',
          after2: '/assets/main-res-2.png',
        },
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
        title: 'Операция лицо 2 (1)',
        subtitle: 'Закрытая хранящая риносептопластика, 1 год после операции',
        images: {
          before1: '/assets/main-res-1.png',
          before2: '/assets/main-res-1.png',
          after1: '/assets/main-res-2.png',
          after2: '/assets/main-res-2.png',
        },
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
        title: 'Операция лицо 2 (2)',
        subtitle: 'Закрытая хранящая риносептопластика, 1 год после операции',
        images: {
          before1: '/assets/main-res-1.png',
          before2: '/assets/main-res-1.png',
          after1: '/assets/main-res-2.png',
          after2: '/assets/main-res-2.png',
        },
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
        id: 8,
        title: 'Операция лицо 2 (3)',
        subtitle: 'Закрытая хранящая риносептопластика, 1 год после операции',
        images: {
          before1: '/assets/main-res-1.png',
          before2: '/assets/main-res-1.png',
          after1: '/assets/main-res-2.png',
          after2: '/assets/main-res-2.png',
        },
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
    link: '/',
  },
  regFormBlock: {
    name: '[ Первичная консультация ]',
    title: 'Запись на прием',
    subtitle:
      'Наши операторы свяжутся с&nbsp;вами для&nbsp;выбора оптимального времени посещения',
  },
}
