import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import '../Styles/BurgerMenu.css'

export default class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({menuOpen: false})
  }


  render () {
    return (
      <Menu right width = { '100%' }
          noOverlay
          disableAutoFocus
          isOpen = { this.state.menuOpen }
          onStateChange = { (state) => this.handleStateChange(state) }
      >
        <NavLink className = 'menu-item' exact to = '/' onClick = { this.closeMenu }>Home</NavLink>
        <NavLink className = 'menu-item' exact to = '/company' onClick = { this.closeMenu }>Company</NavLink>
        <NavLink className = 'menu-item' exact to = '/products' onClick = { this.closeMenu}>Products</NavLink>
        <NavLink className = 'menu-item' exact to = '/contacts' onClick = { this.closeMenu }>Contact Us</NavLink>
      </Menu>
    );
  }
}
