import { FC } from 'react'
import styled from 'styled-components'
import { ContainerPropsType } from './types'

export const Container: FC<ContainerPropsType> = ({
  children,
  background,
  variant = 'default',
}) => {
  const SelectedContainer = Containers[variant]
  return (
    <SelectedContainer $background={background}>{children}</SelectedContainer>
  )
}

const DefaultContainer = styled.div<{ $background?: string }>`
  margin: 0 auto;
  padding: 0 16px;
  background: ${({ $background }) => $background && $background};
  justify-content: center;

  @media screen and (min-width: 640px) {
    padding: 0 24px;
  }
`
const GridContainer = styled(DefaultContainer)`
  column-gap: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(12, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(24, 32px);
  }
`
const FlexRow = styled(DefaultContainer)`
  display: flex;
`
const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`
const RowColumn = styled(FlexColumn)`
  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
`
const Category = styled(RowColumn)`
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 640px) {
    gap: 15px;
  }
`

const Containers = {
  default: GridContainer,
  row: FlexRow,
  column: FlexColumn,
  rowColumn: RowColumn,
  category: Category,
}
