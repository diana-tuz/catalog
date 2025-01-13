import { useEffect } from 'react'
import styled from 'styled-components'
import {
  CategoryBlock,
  Container,
  Hero,
  Label,
  PreviewBlock,
} from '../../components'
import { images } from '../../images'
import { useActions, useAppSelector } from '../../redux/useActions'

export const HomePage = () => {
  const { getProducts, setSelectedCategory } = useActions()
  const products = useAppSelector((state) => state.products.products)

  useEffect(() => {
    getProducts()
  }, [])

  const maxYear = Math.max(...products.map((product) => product.year))

  const selectedProducts = products.filter(
    (product) => product.year === maxYear,
  )

  const hotPricesProducts = products.filter(
    ({ price, fullPrice }) => price <= fullPrice - fullPrice * 0.15,
  )

  const categories = [
    {
      image: images.phones,
      category: 'Mobile phones',
      count: '95',
      path: 'catalog/phones',
      onClick: () => setSelectedCategory('phones'),
    },
    {
      image: images.tablets,
      category: 'Tablets',
      count: '24',
      path: 'catalog/tablets',
      onClick: () => setSelectedCategory('tablets'),
    },
    {
      image: images.accessories,
      category: 'Accessories',
      count: '100',
      path: 'catalog/accessories',
      onClick: () => setSelectedCategory('accessories'),
    },
  ]

  return (
    !!products && (
      <Container>
        <TitleContainer>
          <Label variant={'h1'}>{'Welcome to Nice Gadgets store!'}</Label>
        </TitleContainer>
        <Hero />
        <PreviewBlock cards={selectedProducts} title={'Brand new models'} />
        <CategoryBlock categories={categories} />
        <PreviewBlock
          cards={hotPricesProducts}
          title={'HotPrices'}
          isHotPrices={true}
        />
      </Container>
    )
  )
}

const TitleContainer = styled.div`
  grid-column: 1/-1;
  margin: 40px 0;
`
