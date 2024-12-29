import { FC } from 'react'

import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { images } from '../../images'

import { Label } from '../Label'

import { Container } from '../Container'
import { FooterPropsType } from './types'

export const Footer: FC<FooterPropsType> = ({ links }) => (
    <Wrapper>
      <Container>
        <A>
          <Logo to={'/'}>
            <Image src={images.logo} />
          </Logo>
          <Links>
            {links.map(({ link, name }) => (
              <LinkItem to={link} key={name} target={'_blank'}>
                <Label variant={'uppercase'}>{name}</Label>
              </LinkItem>
            ))}
          </Links>
          <ArrowUp>
            <Label variant={'smallText'}>{'Back to top'}</Label>
            <IconWrapper>
              <Icon src={images.arrowUp} />
            </IconWrapper>
          </ArrowUp>
        </A>
      </Container>
    </Wrapper>
  )

const A = styled.div`
  display: flex;
  grid-column: 1/24;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  border-top: 1px solid var(--gray);
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

const Links = styled.div`
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

const LinkItem = styled(NavLink)`
  padding: 13px 0;

  @media screen and (min-width: 1199px) {
    padding: 24px 0;
  }

  &.active {
    border-bottom: 2px solid var(--white);
    color: var(--secondary);
  }
`

const ArrowUp = styled.button`
  align-items: center;
  color: var(--secondary);
  display: flex;
  gap: 16px;
  padding: 16px;
`

const Icon = styled.img`
  aspect-ratio: 1;
  width: 16px;
`

const IconWrapper = styled.span`
  align-items: center;
  display: flex;
  height: 16px;
  justify-content: center;
  width: 16px;
  background-color: var(--arrow-gray);

  @media screen and (min-width: 640px) {
    height: 32px;
    width: 32px;
  }
`
