import { ButtonHTMLAttributes } from 'react'

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType
  title?: string
  icon?: string
}

type ButtonVariantType = 'default' | 'smallIcon' | 'addToCart' | 'prev' | 'next'
