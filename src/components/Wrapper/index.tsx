import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { useActions } from '../../redux/useActions'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { MenuMobile } from '../MenuMobile'

export const Wrapper = () => {
  const { setSelectedCategory } = useActions()

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
      onClick: () => setSelectedCategory('phones'),
    },
    {
      name: 'Tablets',
      link: 'catalog/tablets',
      onClick: () => setSelectedCategory('tablets'),
    },
    {
      name: 'Accessories',
      link: 'catalog/accessories',
      onClick: () => setSelectedCategory('accessories'),
    },
  ]
  const links = [
    {
      name: 'Github',
      link: 'https://github.com/diana-tuz',
    },
    {
      name: 'Contacts',
      link: '/contacts',
    },
    {
      name: 'rights',
      link: '/rights',
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
      <Footer links={links} />
    </Container>
  )
}

const Container = styled.div<{ $displayMenu: boolean }>`
  background-color: var(--primary);
  color: var(--white);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: ${({ $displayMenu }) => ($displayMenu ? 'hidden' : 'auto')};
  max-height: ${({ $displayMenu }) => ($displayMenu ? '100vh' : 'auto')};
`
const Main = styled.main<{ $displayMenu: boolean }>`
  position: relative;
  flex: 1;
`
