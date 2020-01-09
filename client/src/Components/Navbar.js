import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%
    justify-content: space-between;
    padding-bottom: 2em;
  }
  paddingLeft: 10%;
  & ul {
    padding-inline-start: 0;
    color: rgb(128,128,128);
  }
  & ul:last-child {
    @media (max-width: 500px) {
      display: none;
    }
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
            <img src = '../Images/logo.png' alt = 'Liana Technologies logo'/>
          </div>
        </NavLink>
      </li>
    </ul>
      <ul>
        {linksList}
      </ul>
    </Nav>
  )
}

export default Navbar;
