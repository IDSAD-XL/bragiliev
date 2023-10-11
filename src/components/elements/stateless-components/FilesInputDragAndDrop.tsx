import React from 'react'
import Image from 'next/image'
import { IFilesWithPreview } from '../../../hooks/useFileinput'

interface IFilesInputDragAndDrop {
  selectedFiles: IFilesWithPreview[]
  removeFile: (item: IFilesWithPreview) => void
  addFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FilesInputDragAndDrop: React.FC<IFilesInputDragAndDrop> = ({
  selectedFiles,
  removeFile,
  addFiles,
}) => {
  return (
    <div className="grid grid-cols-4 gap-[5px] lg:col-span-1">
      {selectedFiles.map((item, index) => {
        return (
          <div
            key={index}
            className="relative aspect-square border-1 border-half-gray"
          >
            <Image
              src={item.preview}
              alt=""
              className="object-cover object-center"
              fill={true}
            />
            <button
              className="absolute right-[6px] top-[6px] border-0 bg-none mix-blend-difference"
              type="button"
              onClick={() => {
                removeFile(item)
              }}
            >
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.696877 8.71719L7.66565 1.54529L6.96878 0.828097L0 8L0.696877 8.71719Z"
                  fill="white"
                />
                <path
                  d="M7.30312 8.71719L0.334347 1.54529L1.03122 0.828097L8 8L7.30312 8.71719Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        )
      })}
      {selectedFiles.length > 0 && (
        <div className="aspect-square border-1 border-half-gray">
          <label
            htmlFor="add-file"
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <span className="mt-[-25px] h-[50px] text-[50px]">+</span>
            <span className="text-light">Загрузить</span>
          </label>
          <input
            type="file"
            id="add-file"
            multiple
            className="absolute h-[1px] w-[1px] opacity-0"
            onChange={addFiles}
          />
        </div>
      )}
    </div>
  )
}

export default FilesInputDragAndDrop
