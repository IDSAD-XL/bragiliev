import React from 'react'
import { IContentBlock } from '../../../types/elements/ContentBlock'

export interface IBlockWithTwoTextColumns extends IContentBlock {
  key: 'IBlockWithTwoTextColumns'
  textsLeft?: string[]
  textsRight?: string[]
  haveLeft?: boolean
}

const BlockWithTwoTextColumns: React.FC<IBlockWithTwoTextColumns> = ({
  textsRight,
  textsLeft,
  haveLeft = true,
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="container flex flex-wrap gap-x-[20px] gap-y-[30px] lg:flex-nowrap">
        {haveLeft && (
          <div className="text-large flex-shrink lg:flex-[50%] lg:flex-grow-0">
            {textsLeft?.map((text, index) => {
              return (
                <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
              )
            })}
          </div>
        )}
        <div
          className={`text-regular flex flex-shrink flex-col gap-y-[30px] lg:flex-grow-0 ${
            haveLeft ? 'lg:flex-[50%] lg:pl-[108px]' : ''
          }`}
        >
          {textsRight?.map((text, index) => {
            return <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          })}
        </div>
      </div>
    </div>
  )
}

export default BlockWithTwoTextColumns
