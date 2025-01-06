import { FC } from 'react'
import { CategoryItem } from '../CategoryItem'
import { Container } from '../Container'
import { CategoryBlockPropsType } from './types'

export const CategoryBlock: FC<CategoryBlockPropsType> = ({ categories }) => (
  <Container variant={'category'}>
    {categories.map((item, index) => (
      <CategoryItem key={index} {...item} />
    ))}
  </Container>
)
