import { FC } from 'react'

import Slider from 'react-slick'
import styled from 'styled-components'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { images } from '../../images'
import { Container } from '../Container'

export const Hero: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
  }

  return (
    <Container>
      <SliderWrapper>
        <CustomStyles>
          <SliderContainer>
            <Slider {...settings}>
              <ImageContainer>
                <Image src={images.banner1} />
              </ImageContainer>
              <ImageContainer>
                <Image src={images.bannerTablets} />
              </ImageContainer>
              <ImageContainer>
                <Image src={images.bannerPhones} />
              </ImageContainer>
            </Slider>
          </SliderContainer>
        </CustomStyles>
      </SliderWrapper>
    </Container>
  )
}
const CustomStyles = styled.div`
  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 98%;
    background: var(--arrow-gray);
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

  .slick-prev,
  .slick-next {
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: url(${images.arrowBig});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .slick-prev:after {
    transform: rotate(-90deg);
  }

  .slick-next:after {
    transform: rotate(90deg);
  }
`

const SliderContainer = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    height: 400px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    height: 400px;
  }
`

const SliderWrapper = styled.div`
  margin: 0 60px;
  grid-column: 1/-1;
`
