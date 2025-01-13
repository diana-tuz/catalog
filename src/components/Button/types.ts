import { ButtonHTMLAttributes } from 'react'

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType
  title?: string
  icon?: string
  isActive?: boolean
}

type ButtonVariantType = 'default' | 'smallIcon' | 'addToCart' | 'prev' | 'next'
