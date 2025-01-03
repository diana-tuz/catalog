import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Label } from '../../components'
import { Hero } from '../../components/HeroSlider'

export const HomePage = () => (
  <Container>
    <Label variant={'h1'}>{'HOME'}</Label>
    <NavLink to={'/catalog'}>{'catalog'}</NavLink>{' '}
    <NavLink to={'/cart'}>{'cart'}</NavLink>{' '}
    <NavLink to={'/phone/1'}>{'phone1'}</NavLink>
    <Hero />
  </Container>
)

const Container = styled.div``
