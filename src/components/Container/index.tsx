import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <DefaultContainer>{children}</DefaultContainer>
)

const DefaultContainer = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(12, 1fr);
    padding: 0 24px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(24, 32px);
  }
`
