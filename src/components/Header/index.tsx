import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { images } from '../../images'
import { Label } from '../Label'

export const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const onCLickBurger = () => setDisplayMenu(!displayMenu)

  return (
    <Wrapper>
      <Left>
        <Logo to={'/'}>
          <Image src={images.logo} />
        </Logo>
        <Nav>
          <NavItem to={'/'}>
            <Label variant={'uppercase'}>{'Home'}</Label>
          </NavItem>
          <NavItem to={'catalog/phones'}>
            <Label variant={'uppercase'}>{'Phones'}</Label>
          </NavItem>
          <NavItem to={'catalog/tablets'}>
            <Label variant={'uppercase'}>{'Tablets'}</Label>
          </NavItem>
          <NavItem to={'catalog/accessories'}>
            <Label variant={'uppercase'}>{'Accessories'}</Label>
          </NavItem>
        </Nav>
      </Left>
      <BurgerMenu onClick={onCLickBurger}>
        <Icon src={images.menu} />
      </BurgerMenu>
      <Buttons>
        <Favorites to={'/favorites'}>
          <Icon src={images.favorites} />
        </Favorites>
        <Cart to={'/cart'}>
          <Icon src={images.cart} />
        </Cart>
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--gray);
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  width: 100%;

  @media screen and (min-width: 1199px) {
    padding-left: 24px;
  }
`

const Left = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;

  @media screen and (min-width: 1199px) {
    gap: 48px;
  }
`
const Logo = styled(Link)``

const Image = styled.img`
  height: 22px;
  width: 64px;
  @media screen and (min-width: 1199px) {
    height: 28px;
    width: 80px;
  }
`

const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 640px) {
    align-items: center;
    display: flex;
    gap: 32px;
  }

  @media screen and (min-width: 1199px) {
    gap: 64px;
  }
`

const NavItem = styled(NavLink)`
  padding: 13px 0;

  @media screen and (min-width: 1199px) {
    padding: 24px 0;
  }

  &.active {
    border-bottom: 2px solid var(--white);
    color: var(--secondary);
  }
`

const BurgerMenu = styled.button`
  aspect-ratio: 1;
  border-left: 1px solid var(--gray);
  padding: 16px;

  @media screen and (min-width: 640px) {
    display: none;
  }
`

const Buttons = styled.div`
  display: none;

  @media screen and (min-width: 640px) {
    display: flex;
  }
`

const Favorites = styled(NavLink)`
  align-items: center;
  aspect-ratio: 1;
  border-left: 1px solid var(--gray);
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 64px;
`

const Cart = styled(Favorites)``

const Icon = styled.img`
  aspect-ratio: 1;
  width: 16px;
`
