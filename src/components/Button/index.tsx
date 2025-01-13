import { FC } from 'react'
import styled from 'styled-components'
import { images } from '../../images'
import { Label } from '../Label'
import { ButtonPropsType } from './types'

export const Button: FC<ButtonPropsType> = ({
  icon,
  title,
  variant = 'default',
  children,
  ...props
}) => {
  const SelectedButton = Buttons[variant]

  return (
    <SelectedButton $icon={variant === 'smallIcon' ? icon : ''} {...props}>
      {children}
      {title && <Label variant={'button'}>{title}</Label>}
    </SelectedButton>
  )
}

const Default = styled.button``

const SmallIcon = styled.button<{ $icon?: string; selected?: boolean }>`
  background-color: ${({ selected }) =>
    selected ? 'var(--accent)' : 'var(--blue-gray)'};
  background-image: url(${({ $icon }) => $icon});
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  color: var(--white);
  &:hover {
    background-color: var(--gray);
  }

  &:active {
    background-color: var(--accent);
  }
  &:disabled {
    background-color: transparent;
    border: 1px solid var(--gray);
    cursor: not-allowed;
    opacity: 0.8;
  }
`
const Next = styled(SmallIcon)`
  transform: rotate(90deg);
  background-image: url(${images.arrowUp});
  background-color: var(--arrow-gray);
`
const Prev = styled(SmallIcon)`
  transform: rotate(-90deg);
  background-image: url(${images.arrowUp});
  background-color: var(--arrow-gray);
`

const AddToCart = styled.button`
  background-color: var(--accent);
  color: var(--white);
  padding: 9px;

  &:hover {
    background-color: var(--accent-lite);
  }

  &:active {
    background-color: var(--gray);
  }

  @media screen and (min-width: 639px) {
    padding: 9px 40px;
  }
`

const Buttons = {
  addToCart: AddToCart,
  default: Default,
  smallIcon: SmallIcon,
  prev: Prev,
  next: Next,
}
