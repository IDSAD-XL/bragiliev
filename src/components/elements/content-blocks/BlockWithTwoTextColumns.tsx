import React from 'react'
import { IContentBlock } from '../../../types/elements/ContentBlock'

export interface IBlockWithTwoTextColumns extends IContentBlock {
  key: 'IBlockWithTwoTextColumns'
  textsLeft: string[]
  textsRight: string[]
}

const BlockWithTwoTextColumns: React.FC<IBlockWithTwoTextColumns> = ({
  textsRight,
  textsLeft,
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex-cols-2 container">
        <div>asdfsdaffsd</div>
        <div>123123312</div>
      </div>
    </div>
  )
}

export default BlockWithTwoTextColumns
