import { FC } from 'react'
import styled from 'styled-components'
import { responsiveFontSize, responsiveLineHeight } from '../../styles/mixines'
import { LabelPropsType } from './types'

export const Label: FC<LabelPropsType> = ({
  variant = 'bodyText',
  children,
}) => {
  const SelectedLabel = Labels[variant]

  return <SelectedLabel>{children}</SelectedLabel>
}

const BodyText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

const Button = styled(BodyText)`
  font-weight: 600;
  color: inherit;
`

const H1 = styled.h1`
  ${responsiveFontSize(32, 48)}
  ${responsiveLineHeight(1.28, 1.16)}
  letter-spacing: -0.01em;
  font-weight: 700;
`

const H2 = styled.h2`
  ${responsiveFontSize(22, 32)}
  ${responsiveLineHeight(1.4, 1.28)}
  letter-spacing: -0.01em;
  font-weight: 700;
`

const H3 = styled.h3`
  ${responsiveFontSize(20, 22)}
  ${responsiveLineHeight(1.3, 1.4)}
  font-weight: 600;
`

const H4 = styled.h4`
  ${responsiveFontSize(15, 20)}
  ${responsiveLineHeight(1.25, 1.3)}
  font-weight: 600;
`

const SmallText = styled.p`
  font-size: 12px;
  line-height: 1.25;
  font-weight: 600;
`

const Uppercase = styled.p`
  font-size: 12px;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 700;
`

const Labels = {
  bodyText: BodyText,
  button: Button,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  smallText: SmallText,
  uppercase: Uppercase,
}
