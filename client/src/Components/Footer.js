import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterCmp = styled.footer`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, auto));
  padding: 1em 10% 4em 10%;
  color: rgb(255,255,255);
  background-color: rgb(0,0,0);
  & ul {
    padding-inline-start: 0;
  }
  & ul li {
    display: inline-block;
    vertical-align: middle;
    padding-left: 1em;
  }
  & ul li:first-child {
    padding-left: 0;
  }
  & button {
    height: 2.1em;
    max-height: 2.1em;
    padding: 0 1em;
    margin: auto 0em 0.2em 2em;
    font-size: 1em;
    color: rgb(255,255,255);
    background-color: rgb(76, 137, 48);
    border: 1px rgb(76, 137, 48) solid;
    border-radius: 4px 4px;
    outline: none;
    cursor: pointer;
  }
  & .social--media-wrapper {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    margin: auto 0em 0.2em 0;
    text-align: right;
  }
  & .social--media {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    margin-left: 1em;
    background-color: rgb(76, 137, 48);
    border-radius: 50%;
  }
  & .social--media i {
    color: rgb(255, 255, 255);
  }

`;

const Nav = styled.nav`
  padding-bottom: 1em;
  & .nav {
    text-align: right;
    /* font-size: 0.8em; */
  }
  & .nav li {
    padding-top: 0.4em;
  }
`;

const Brand = styled.div`
  padding-bottom: 2em;
  & .brand-name li:first-child {
    font-size: 1.2em;
  }
`;

const Footer = () => {
  const links = require('../Data/menu.json');
  const linksList = links.map( (link) => {
    return(
      <li key = {link.id}>
        <NavLink exact to = {link.path}>
          <p>{link.title}</p>
        </NavLink>
      </li>
    )
  })
  return(
    <FooterCmp>
      <Brand>
        <ul className = 'brand-name'>
          <li>
            <NavLink exact to = '/'>
              <p>Liana Technologies</p>
            </NavLink>
          </li>
        </ul>
      </Brand>
      <Nav>
        <ul className = 'nav'>
          {linksList}
        </ul>
      </Nav>
      <div style = {{display: 'flex'}}>
        <div>
          <p style = {{ fontWeight: 600 }}>Sales and inquiries</p>
          <p style = {{ fontWeight: 200 }}>Email: sales@lianatech.com</p>
          <p style = {{ fontWeight: 200 }}>Phone: +358 10 387 7053</p>
        </div>
        <button>Contact us</button>
      </div>
      <div className = 'social--media-wrapper'>
        <div className = 'social--media'><i class="fab fa-linkedin-in"></i></div>
        <div className = 'social--media'><i class="fab fa-twitter"></i></div>
        <div className = 'social--media'><i class="fab fa-facebook-f"></i></div>
      </div>
    </FooterCmp>
  )
}

export default Footer;
