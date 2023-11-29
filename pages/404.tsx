import React from 'react'
import Layout from '../src/components/layout/Layout'
import { headerContent } from '../src/mock/layout'

const PageNotFound = () => {
  return (
    <Layout header={{ ...headerContent, variant: 'light' }}>
      <div className="flex h-full grow justify-center pt-[140px]">
        <div className="container">
          <h1 className="title1">Страница не найдена (ошибка 404)</h1>
          <br />
          <p className="title5">
            Возможно, это случилось по одной из этих причин:{' '}
          </p>
          <ul className="list">
            <li>Вы ошиблись при наборе адреса страницы (URL) </li>
            <li>Перешли по «битой» (неработающей, неправильной) ссылке </li>
            <li>
              запрашиваемой страницы никогда не было на сайте или она была
              удалена
            </li>
          </ul>
          <br />
          <p className="title5">
            Мы просим прощение за доставленные неудобства и предлагаем следующие
            пути:
          </p>
          <ul className="list">
            <li>Вернуться назад при помощи кнопки браузера back </li>
            <li>Проверить правильность написания адреса страницы (URL) </li>
            <li>
              Перейти на главную страницу сайта Если Вы уверены в правильности
              набранного адреса страницы и считаете, что эта ошибка произошла по
              нашей вине, пожалуйста, сообщите об этом разработчикам (или
              владельцам) сайта при помощи контактной формы или электронной
              почты.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default PageNotFound
