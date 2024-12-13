import { PropsWithChildren } from 'react'

export interface LabelPropsType extends PropsWithChildren {
  variant?: LabelVariantType
}

type LabelVariantType =
  | 'bodyText'
  | 'button'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'smallText'
  | 'uppercase'
