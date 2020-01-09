import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Language from './Language';

const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  padding: 1em 0;
  & ul {
    padding-inline-start: 0;
  }
  & ul li {
    display: inline-block;
    vertical-align: middle;
    padding-right: 1em;
  }
  & ul li:last-child {
    padding-right: 0;
  }
`;

const NavbarExt = () => {
  const links = require('../Data/menu.json');
  const linksList = links.slice(3,5).map( (index) => {
    return(
      <li key = {index.id}>
        <NavLink exact to = {index.path}>
          <p>{index.title}</p>
        </NavLink>
      </li>
    )
  });
  return (
    <Nav>
      <ul>
        {linksList}
        <li>
          <Language />
        </li>
      </ul>
    </Nav>
  )
}

export default NavbarExt;
