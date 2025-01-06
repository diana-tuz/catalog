import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Label } from '../Label'
import { CategoryItemPropsType } from './types'

export const CategoryItem: FC<CategoryItemPropsType> = ({
  image,
  category,
  count,
  path,
}) => (
  <Card>
    <CategoryLink to={path} $image={image} />
    <Label variant={'h4'}>{category}</Label>
    <Label
      variant={'bodyText'}
      color={'var(--gray)'}
    >{`${count} models`}</Label>
  </Card>
)

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`
const CategoryLink = styled(NavLink)<{ $image: string }>`
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 24px;
  width: 288px;
  aspect-ratio: 1;
  @media screen and (min-width: 640px) {
    width: 187px;
  }
  @media screen and (min-width: 1199px) {
    width: 368px;
  }
`
