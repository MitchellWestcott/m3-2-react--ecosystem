import React from 'react';

import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 10px 0px rgba(204,186,204,0.79);
  margin: 0px 0px 30px 0px;
`
const Logo = styled.h1`
  font-size: 34px;
  padding-left: 20px;

`
const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
`

const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding: 0px 20px;

  &.active{
    color: lightblue;
  }

  &.after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    width: 50%;
    margin: auto;
    height: 3px;
    transform: scaleX(0);
    transform-origin: center center;
    border-radius: 2px;
  }

  &.active:after {
    transform: scaleX(1);
    opacity: 0.9;
  }
`

// const Links = styled.div`
//   width: 50%;
//   justify-content: flex-end;
//   align-content: center;
//   display:flex;
//   padding: 30px;
// `

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
            Fruit Emporium
            </Logo>
            <nav>
              <NavigationList>
                  <NavigationLink exact activeClassName='active' to='/'>
                    Home
                  </NavigationLink>
                <li>
                  <NavigationLink activeClassName='active' to='/about'>
                    About
                  </NavigationLink>
                </li>
            {/* <Links>
                <Link to="/">Home</Link>{' '}
                <Link to="/about">About</Link>{' '}
            </Links> */}
            </NavigationList>
            </nav>
        </HeaderContainer>
    )
}

export default Header;