import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../Header'
import { MenuMobile } from '../MenuMobile'

export const Wrapper = () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const onCLickBurger = () => setDisplayMenu(!displayMenu)
  const navigation = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Phones',
      link: 'catalog/phones',
    },
    {
      name: 'Tablets',
      link: 'catalog/tablets',
    },
    {
      name: 'Accessories',
      link: 'catalog/accessories',
    },
  ]

  return (
    <Container $displayMenu={displayMenu}>
      <Header
        onCLickBurger={onCLickBurger}
        displayMenu={displayMenu}
        navigation={navigation}
      />
      <Main $displayMenu={displayMenu}>
        {displayMenu && (
          <MenuMobile navigation={navigation} onCLickBurger={onCLickBurger} />
        )}
        <Outlet />
      </Main>
      <footer>{'footer'}</footer>
    </Container>
  )
}

const Container = styled.div<{ $displayMenu: boolean }>`
  background-color: var(--primary);
  color: var(--white);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
`
const Main = styled.main`
=======
  overflow: ${({ $displayMenu }) => ($displayMenu ? 'hidden' : 'auto')};
  max-height: ${({ $displayMenu }) => ($displayMenu ? '100vh' : 'auto')};
`
const Main = styled.main<{ $displayMenu: boolean }>`
  position: relative;
>>>>>>> bdaddb0 (Add MobileMenu)
  flex: 1;
`
