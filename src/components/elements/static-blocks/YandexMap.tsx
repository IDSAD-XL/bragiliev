import React from 'react'
const YandexMap = () => {
  return (
    <div className="flex w-full justify-center bg-dark">
      <div className="map-wrapper w-full md:container">
        <div className="relative overflow-hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=30.321017%2C59.927929&mode=search&oid=1204978094&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTdvnBTmUT5AEQGJJlDE9k1AEhIJ7E53nnjOVj8RCK9d2nBYOj8iBgABAgMEBSgKOABAma4HSAFiEmxldG9fdl9nb3JvZGU9dHJ1ZWoCcnWdAc3MTD2gAQCoAQC9AY2ZXnXCAQWug8q%2BBOoBAPIBAPgBAIICCGdyYW5kbWVkigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=30.321017%2C59.927929&sspn=0.008440%2C0.002439&text=grandmed&z=17"
            className="aspect-[320/554] w-full md:aspect-[1276/554]"
            frameBorder="0"
            allowFullScreen={true}
            style={{ position: 'relative' }}
          />
        </div>
      </div>
    </div>
  )
}

export default YandexMap
