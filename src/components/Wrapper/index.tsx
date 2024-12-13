import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = () => (
  <Container>
    <header>{'header'}</header>
    <Outlet />
    <footer>{'footer'}</footer>
  </Container>
)

const Container = styled.div``
// const H1 = styled.h1``;
