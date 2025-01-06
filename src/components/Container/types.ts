import { PropsWithChildren } from 'react'

export interface ContainerPropsType extends PropsWithChildren {
  background?: string
  variant?: ContainerVariant
}

export type ContainerVariant =
  | 'category'
  | 'column'
  | 'default'
  | 'row'
  | 'rowColumn'
