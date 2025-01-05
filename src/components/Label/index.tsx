import { FC } from 'react'
import styled from 'styled-components'
import { responsiveFontSize, responsiveLineHeight } from '../../styles/mixines'
import { LabelPropsType } from './types'

export const Label: FC<LabelPropsType> = ({
  variant = 'bodyText',
  children,
  color,
}) => {
  const SelectedLabel = Labels[variant]

  return <SelectedLabel $color={color}>{children}</SelectedLabel>
}

const BodyText = styled.p<{ $color?: string }>`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ $color }) => ($color ? $color : 'inherit')};
`
const CardTitle = styled(BodyText)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 95%;
`

const Button = styled(BodyText)`
  font-weight: 600;
`

const H1 = styled.h1<{ $color?: string }>`
  ${responsiveFontSize(32, 48)}
  ${responsiveLineHeight(1.28, 1.16)}
  letter-spacing: -0.01em;
  color: ${({ $color }) => ($color ? $color : 'inherit')};
  font-weight: 700;
`

const H2 = styled.h2<{ $color?: string }>`
  ${responsiveFontSize(22, 32)}
  ${responsiveLineHeight(1.4, 1.28)}
  letter-spacing: -0.01em;
  color: ${({ $color }) => ($color ? $color : 'inherit')};
  font-weight: 700;
`

const H3 = styled.h3<{ $color?: string }>`
  ${responsiveFontSize(20, 22)}
  ${responsiveLineHeight(1.3, 1.4)}
  color: ${({ $color }) => ($color ? $color : 'inherit')};
  font-weight: 600;
`
const H3Price = styled(H3)`
  color: ${({ $color }) => ($color ? $color : 'var(--gray)')};
  text-decoration: solid;
  text-decoration-line: line-through;
`

const H4 = styled.h4<{ $color?: string }>`
  ${responsiveFontSize(15, 20)}
  ${responsiveLineHeight(1.25, 1.3)}
  color: ${({ $color }) => ($color ? $color : 'inherit')};
  font-weight: 600;
`

const SmallText = styled.p<{ $color?: string }>`
  font-size: 12px;
  line-height: 1.25;
  color: ${({ $color }) => ($color ? $color : 'inherit')};
  font-weight: 600;
`
const SmallBold = styled(SmallText)<{ $color?: string }>`
  font-weight: 700;
`

const Uppercase = styled.p<{ $color?: string }>`
  font-size: 12px;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ $color }) => ($color ? $color : 'inherit')};
  font-weight: 700;
`

const Labels = {
  bodyText: BodyText,
  button: Button,
  cardTitle: CardTitle,
  h1: H1,
  h2: H2,
  h3: H3,
  h3Price: H3Price,
  h4: H4,
  smallText: SmallText,
  uppercase: Uppercase,
  smallBold: SmallBold,
}
