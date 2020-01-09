import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  paddingLeft: 10%;
  & ul {
    padding-inline-start: 0;
    color: rgb(128,128,128);
  }
  & ul li {
    display: inline-block;
    vertical-align: middle;
    padding-left: 1em;
  }
  & ul li:first-child {
    padding-left: 0;
  }
  & div {
    width: 15em;
    height: 8em;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Navbar = () => {
  const links = require('../Data/menu.json');
  const linksList = links.slice(0,3).map( (index) => {
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
        <li>
          <NavLink exact to =  '/'>
            <div>
              <img src = '../Images/logo.png' />
            </div>
          </NavLink>
        </li>
        {linksList}
      </ul>
    </Nav>
  )
}

export default Navbar;
