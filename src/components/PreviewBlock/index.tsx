import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Button } from '../Button'
import { Label } from '../Label'
import { ProductCard } from '../ProductCard'

import { Container } from '../Container'
import { PreviewBlockPropsType } from './types'

export const PreviewBlock: FC<PreviewBlockPropsType> = ({ title, cards }) => {
  const [startIndex, setStartIndex] = useState(0)

  const [displayCards, setDisplayCards] = useState(4)

  useEffect(() => {
    const windowSize = window.screen.width

    setDisplayCards(windowSize < 639 ? 2 : 4)
    console.info('windowSize')
    console.info({ windowSize })
  }, [])

  const currentCards = cards.slice(startIndex, startIndex + displayCards)

  const onClickNext = () => setStartIndex(startIndex + 1)

  const onClickPrev = () => setStartIndex(startIndex - 1)

  return (
    <Container>
      <TopContainer>
        <Label variant={'h2'}>{title}</Label>
        <Buttons>
          <Button
            variant={'prev'}
            onClick={onClickPrev}
            disabled={startIndex === 0}
          />
          <Button
            variant={'next'}
            onClick={onClickNext}
            disabled={startIndex >= cards.length - 5}
          />
        </Buttons>
      </TopContainer>
      <CardsWrapper>
        {currentCards.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </CardsWrapper>
    </Container>
  )
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/-1;
`
const Buttons = styled.div`
  display: flex;
  gap: 16px;
`

const CardsWrapper = styled.div`
  display: flex;
  gap: 16px;
  grid-column: 1/-1;
  overflow: hidden;
  margin-bottom: 56px;

  @media screen and (min-width: 639px) {
    overflow: unset;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1199px) {
    margin-bottom: 80px;
  }
`
