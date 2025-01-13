import { FC } from 'react'
import styled from 'styled-components'

import { Button } from '../Button'
import { Label } from '../Label'

import { images } from '../../images'
import { ProductCardPropsType } from './types'

export const ProductCard: FC<ProductCardPropsType> = ({
  addToCart = () => {},
  capacity,
  fullPrice,
  image,
  isHotPrices,
  name,
  price,
  ram,
  screen,
}) => (
  <Container>
    <Wrapper>
      <Image alt={`${name}-image`} src={image} />
      <Label variant={'cardTitle'}>{name}</Label>
      {isHotPrices ? (
        <Price>
          <Label variant={'h3'}>{`$${price}`}</Label>
          <Label variant={'h3Price'}>{`$${fullPrice}`}</Label>
        </Price>
      ) : (
        <Label variant={'h3'}>{`$${fullPrice}`}</Label>
      )}
    </Wrapper>
    <Property>
      <Label variant={'smallText'} color={'var(--gray)'}>
        {'Screen'}
      </Label>
      <Label>{screen}</Label>
    </Property>
    <Property>
      <Label variant={'smallText'} color={'var(--gray)'}>
        {'Capacity'}
      </Label>
      <Label>{capacity}</Label>
    </Property>
    <Property>
      <Label variant={'smallText'} color={'var(--gray)'}>
        {'RAM'}
      </Label>
      <Label>{ram}</Label>
    </Property>
    <ButtonsContainer>
      <Button variant={'addToCart'} title={'Add to cart'} onClick={addToCart} />
      <Button
        variant={'smallIcon'}
        onClick={addToCart}
        icon={images.favorites}
      />
    </ButtonsContainer>
  </Container>
)

const Container = styled.div`
  background: var(--blue-gray);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  width: 212px;
  transition: ease-in 0.5s all;

  @media screen and (min-width: 639px) {
    width: 272px;
  }
  &:hover {
    transform: scale(1.05);
  }
`
const Image = styled.img`
  width: 149px;
  aspect-ratio: 0.8;
  margin-bottom: 24px;
  @media screen and (min-width: 639px) {
    width: 173px;
  }
  @media screen and (min-width: 1199px) {
    width: 208px;
  }
`
const Price = styled.div`
  display: flex;
  gap: 15px;
`
const Wrapper = styled.div`
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  height: 70%;
`
const Property = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
