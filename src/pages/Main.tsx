import React from 'react'
import Layout from '../components/layout/Layout'
import PageHead from '../components/elements/PageHead'
import InfoBlock from '../components/elements/InfoBlock'

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
        title={`<b class="font-[700]">Брагилев</b> <br> Вадим <br> Алексеевич`}
        image="/assets/main-bg.jpg"
      >
        <p className="mt-[20px] text-light-gray md:mt-[17px] dsk:mt-[31px]">
          Врач хирург высшей категории. Кандидат медицинских наук. Автор более
          50 научных работ. Доцент кафедры пластической и реконструктивной
          хирургии И.И. Мечникова
        </p>
        <p className="mt-[20px] leading-[39px] md:mt-[41px] dsk:mt-[25px]">
          <span className="link-plus link-plus--white text-white">
            запись на прием
          </span>
        </p>
      </PageHead>
      <InfoBlock
        name="[ история ]"
        title="Обо мне"
        subtitle="Так уж сложилось, что маммопластика стала одной из моих любимых дисциплин. А толчком послужил случай почти тридцатилетней давности..."
        link="/"
      >
        <span className="text-regular hidden dsk:block">
          Стандарты красоты? Их нет. Есть магия пропорций, привлекательность
          асимметрии, ценность непохожести на других. Нужно быть самим собой.
          Но в лучшей версии
        </span>
        <span className="text-regular hidden dsk:block">
          Улыбчивое лицо. Элегантные руки. Вдумчивая речь. Решительные поступки.
          Наблюдателен и неутомим. Да, вот такой он — Вадим Алексеевич Брагилев!
        </span>
      </InfoBlock>
    </Layout>
  )
}

export default Main
