import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Label } from '../../components'

export const HomePage = () => (
  <Container>
    <Label variant={'h1'}>{'HOME'}</Label>
    <NavLink to={'/catalog'}>{'catalog'}</NavLink>{' '}
    <NavLink to={'/cart'}>{'cart'}</NavLink>{' '}
    <NavLink to={'/phone/1'}>{'phone1'}</NavLink>{' '}
  </Container>
)

const Container = styled.div``
