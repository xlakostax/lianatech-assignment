import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterCmp = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, auto));
  width: 80%;
  padding: 1em 10% 4em 10%;
  color: rgb(255,255,255);
  background-color: rgb(0,0,0);
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  & ul {
    padding-inline-start: 0;
  }
  & ul li {
    display: inline-block;
    vertical-align: middle;
    padding-left: 1em;
    @media (max-width: 1024px) {
      padding-left: 0;
    }
  }
  & ul li:first-child {
    padding-left: 0;
  }
  & .contact-us {
    position: relative;
    display: flex;
    @media (max-width: 430px) {
      display: grid;
    }
    @media (min-width: 431px) and (max-width: 768px) {
      justify-content: space-between;
    }
    @media (max-width: 1024px) {
      align-items: center;
      padding-bottom: 2em;
    }
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
    @media (max-width: 430px) {
      margin: 1em 0 0;
    }
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

const Brand = styled.div`
  padding-bottom: 2em;
  & .brand-name li:first-child {
    font-size: 1.2em;
  }
`;

const Nav = styled.nav`
  padding-bottom: 1em;
  @media (max-width: 1024px) {
    padding-bottom: 2em;
  }
  @media (max-width: 500px) {
    display: none;
  }
  & .nav {
    width: 100%;
    text-align: right;
    @media (max-width: 1024px) {
      text-align: justify;
    }
  }
  & .nav li {
    padding-top: 0.4em;
    @media (max-width: 1024px) {
      width: 20%;
    }
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
      <div className = 'contact-us'>
        <div>
          <p style = {{ fontWeight: 600 }}>Sales and inquiries</p>
          <p style = {{ fontWeight: 200 }}>Email: sales@lianatech.com</p>
          <p style = {{ fontWeight: 200 }}>Phone: +358 10 387 7053</p>
        </div>
        <button>Contact us</button>
      </div>
      <div className = 'social--media-wrapper'>
        <div className = 'social--media'><i className = 'fab fa-linkedin-in'></i></div>
        <div className = 'social--media'><i className = 'fab fa-twitter'></i></div>
        <div className = 'social--media'><i className = 'fab fa-facebook-f'></i></div>
      </div>
    </FooterCmp>
  )
}

export default Footer;
