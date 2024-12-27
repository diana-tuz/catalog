import { FC } from 'react'
import styled from 'styled-components'
import { ButtonPropsType } from './types'

export const Button: FC<ButtonPropsType> = ({ variant = 'default' }) => {
  const SelectedButton = Buttons[variant]

  return <SelectedButton />
}

const Default = styled.button``

const Buttons = {
  default: Default,
}
