import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import NavbarExt from './NavbarExt';
import Search from './Search'

const HeaderCmp = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & .topArea, .bottomArea {
    width: 80%;
    padding: 0 10%;
  }
  & .topArea {
    background-color: rgb(76, 137, 48);
  }
  & .bottomArea {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }


`;

const Header = () => {
    return(
      <HeaderCmp>
        <div className = 'topArea'>
          <NavbarExt />
        </div>
        <div className = 'bottomArea'>
          <Navbar />
          <Search />
        </div>
      </HeaderCmp>
    )
}

export default Header;
