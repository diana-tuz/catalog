import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import { images } from '../../images'

import { Label } from '../Label'

import { MenuMobilePropsType } from './types'

export const MenuMobile: FC<MenuMobilePropsType> = ({
  navigation,
  onCLickBurger,
}) => (
  <Menu>
    <Nav>
      {navigation.map(({ link, name }) => (
        <NavItem to={link} key={name} onClick={onCLickBurger}>
          <Label variant={'uppercase'}>{name}</Label>
        </NavItem>
      ))}
    </Nav>
    <Buttons>
      <Button to={'/favorites'} onClick={onCLickBurger}>
        <Icon src={images.favorites} />
      </Button>
      <Button to={'/cart'} onClick={onCLickBurger}>
        <Icon src={images.cart} />
      </Button>
    </Buttons>
  </Menu>
)

const Menu = styled.div`
  position: absolute;
  height: calc(100vh - 55px);
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
  gap: 24px;
`

const NavItem = styled(NavLink)`
  padding: 5px 0;
  &.active {
    border-bottom: 2px solid var(--white);
    color: var(--secondary);
  }
`

const Buttons = styled.div`
  display: flex;
  border-top: 1px solid var(--gray);
`

const Button = styled(NavLink)`
  align-items: center;
  border-left: 1px solid var(--gray);
  display: flex;
  justify-content: center;
  flex: 0.5;
  height: 64px;

  &.active {
    border-bottom: 2px solid var(--white);
  }
`

const Icon = styled.img`
  aspect-ratio: 1;
  width: 16px;
`
