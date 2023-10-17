import React from 'react'
import Image, { ImageProps } from 'next/image'

interface IImageWithDomain extends ImageProps {}

const ImageWithDomain: React.FC<IImageWithDomain> = (props) => {
  const prefix =
    typeof props.src === 'string' && props?.src?.includes('/assets')
      ? ''
      : 'https://grandmed.ru'
  return <Image {...props} alt="" src={`${prefix}${String(props.src)}`} />
}

export default ImageWithDomain
