import { PropsWithChildren } from 'react'

export interface LabelPropsType extends PropsWithChildren {
  variant?: LabelVariantType
  color?: string
}

type LabelVariantType =
  | 'bodyText'
  | 'button'
  | 'cardTitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h3Price'
  | 'h4'
  | 'smallBold'
  | 'smallText'
  | 'uppercase'
