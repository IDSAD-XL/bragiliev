import React from 'react'
import Layout from '../components/layout/Layout'
import PageHead from '../components/elements/PageHead'

interface IMainContent {
  image?: string
}

// const mainContent: IMainContent = {}

interface IMain extends IMainContent {}

const Main: React.FC<IMain> = () => {
  return (
    <Layout>
      <PageHead
        name="[ Пластический хирург ]"
        title={`<b>Брагилев</b> <br> Вадим <br> Алексеевич`}
        image="/assets/main-bg.jpg"
      >
        <p className="mt-[31px] text-light-gray">
          Врач хирург высшей категории. Кандидат медицинских наук. Автор более
          50 научных работ. Доцент кафедры пластической и реконструктивной
          хирургии И.И. Мечникова
        </p>
        <p className="mt-[25px] leading-[39px]">
          <span className="link-plus link-plus--white text-white">
            запись на прием
          </span>
        </p>
      </PageHead>
    </Layout>
  )
}

export default Main
