import React from 'react'
import { Listbox } from '@headlessui/react'

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
  variant: 'dark' | 'light'
}

interface selectVariantsSettings {
  background: string
  textColor: string
  hoverBg: string
  border: string
  stroke: string
}

const selectVariants: Record<ISelect['variant'], selectVariantsSettings> = {
  light: {
    background: 'bg-white',
    textColor: 'text-white',
    hoverBg: 'hover:bg-gray-50',
    border: 'border-x border-b border-half-white',
    stroke: 'var(--color-dark-gray)',
  },
  dark: {
    background: 'bg-dark',
    textColor: 'text-dark-gray',
    hoverBg: 'hover:bg-dark-hover',
    border: 'border-none',
    stroke: 'white',
  },
}

const Select: React.FC<ISelect> = ({
  variants = [],
  placeholder,
  onChange,
  value,
  variant,
}) => {
  const styles = selectVariants[variant]
  const handleChange = (value: ISelectVariant) => {
    if (onChange) {
      onChange(value)
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
                stroke={`${styles.stroke}`}
                strokeLinecap="round"
              />
            </svg>
          </span>
        </Listbox.Button>
        <Listbox.Options
          className={`text-regular absolute top-[100%] z-10 max-h-[300px] w-full overflow-auto ${styles.background} ${styles.border}`}
        >
          {variants.length > 0 &&
            variants.map((variant) => (
              <Listbox.Option
                key={variant.id}
                value={variant}
                className={`flex h-[60px] w-full cursor-pointer items-center pl-[18px] ${styles.background} ${styles.hoverBg}`}
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
