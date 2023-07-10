import React from 'react'
import { Listbox } from '@headlessui/react'
import { useRouter } from 'next/router'

export interface ISelectVariantDependence {
  id: number
  key: 'part' | 'operation'
}

export interface ISelectVariant {
  id: number
  name: string
  dependencies?: ISelectVariantDependence[]
}

export interface ISelectContent {
  variants: ISelectVariant[]
  placeholder?: string
}

export interface ISelect extends ISelectContent {
  value: ISelectVariant | null
  onChange?: (val: ISelectVariant) => void
}

const Select: React.FC<ISelect> = ({
  variants = [],
  placeholder,
  onChange,
  value,
}) => {
  const router = useRouter()
  const handleChange = (value: ISelectVariant) => {
    if (onChange) {
      onChange(value)
    }
  }

  function isWhiteBlock(): boolean {
    if (router.pathname === '/reviews') {
      return true
    } else {
      return false
    }
  }

  return (
    <Listbox value={value} onChange={handleChange}>
      <div className="relative">
        <Listbox.Button className="text-regular z-10 flex h-[80px] w-full items-center justify-between border-b-1 border-half-white pl-[18px] text-left md:!text-[21px] dsk:!text-[14px]">
          <span>{value ? value.name : placeholder}</span>
          <span className="transition-transform ui-open:rotate-180">
            <svg
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0066 0.5L9.50659 8.5L1.00659 0.5"
                stroke={`${isWhiteBlock() ? '#26262B' : 'white'}`}
                strokeLinecap="round"
              />
            </svg>
          </span>
        </Listbox.Button>
        <Listbox.Options
          className={`text-regular absolute top-[100%] z-10 max-h-[300px] w-full overflow-auto 
            ${
              isWhiteBlock()
                ? 'border-x border-b border-half-white bg-white'
                : 'bg-dark'
            } 
          `}
        >
          {variants.length > 0 &&
            variants.map((variant) => (
              <Listbox.Option
                key={variant.id}
                value={variant}
                className={`flex h-[60px] w-full cursor-pointer items-center pl-[18px] 
                  ${
                    isWhiteBlock()
                      ? 'bg-white hover:bg-gray-50'
                      : 'bg-dark hover:bg-dark-hover'
                  }
                `}
              >
                {variant.name}
              </Listbox.Option>
            ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

export default Select
