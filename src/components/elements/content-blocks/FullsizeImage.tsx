import React from 'react'
import { IContentBlock } from '../../../types/elements/ContentBlock'
import Image from 'next/image'

export interface IFullsizeImage extends IContentBlock {
  key: 'IFullsizeImage'
  src: string
}

const FullsizeImage: React.FC<IFullsizeImage> = ({ src }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="container">
        <Image src={src} alt={''} fill={true} />
      </div>
    </div>
  )
}

export default FullsizeImage
