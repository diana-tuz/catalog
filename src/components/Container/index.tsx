import { FC } from 'react'
import styled from 'styled-components'
import { ContainerPropsType } from './types'

export const Container: FC<ContainerPropsType> = ({ children, background }) => (
  <DefaultContainer $background={background}>{children}</DefaultContainer>
)

const DefaultContainer = styled.div<{ $background?: string }>`
  column-gap: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  padding: 0 16px;
  background: ${({ $background }) => $background && $background};
  justify-content: center;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(12, 1fr);
    padding: 0 24px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(24, 32px);
  }
`
