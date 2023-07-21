import React from 'react'

export interface ITitleBlock {
  name?: string
  title?: string
  variant?: 'light' | 'dark'
}

interface ITitleBlockSettings {
  containerClasses: string
}

const titleBlockStyles: Record<
  NonNullable<ITitleBlock['variant']>,
  ITitleBlockSettings
> = {
  light: {
    containerClasses: 'bg-primary',
  },
  dark: {
    containerClasses: 'bg-dark text-white',
  },
}

const TitleBlock: React.FC<ITitleBlock> = ({
  name,
  title,
  variant = 'light',
}) => {
  const styles = titleBlockStyles[variant]
  return (
    <div
      className={`flex w-full justify-center dsk:justify-center ${styles.containerClasses}`}
    >
      <div className="container mb-[5px] mt-[120px] flex flex-col md:mt-[160px] dsk:mb-[20px]">
        {!!name && (
          <p className="text-section-title mb-[10px] md:mb-[20px]">
            {name ?? ''}
          </p>
        )}
        {!!title && (
          <h2
            className="flex h-[79px] items-center"
            dangerouslySetInnerHTML={{ __html: title ?? '' }}
          />
        )}
      </div>
    </div>
  )
}

export default TitleBlock
