import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../Header'

export const Wrapper = () => (
  <Container>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <footer>{'footer'}</footer>
  </Container>
)

const Container = styled.div`
  background-color: var(--primary);
  color: var(--white);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  flex: 1;
`
