import React, {Component} from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './header.scss';
import {FaBars, FaWindowClose} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
class Header extends Component {
  public onClick: any;
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <header>
        <a href="#main-menu" id="main-menu-toggle" className="menu-toggle" aria-label="Open Main Menu">
          <span className="sr-only"> Open Main Menu</span>
          <FaBars aria-hidden="true"/>
        </a>

        <h1 className="logo">Testing hamburgers</h1>

        <nav id="main-menu" className="main-menu" aria-label="Main Menu">
          <a href="main-menu-toggle" 
              id="main-menu-close" 
              className="menu-close" 
              aria-label="Close Main Menu">
            <span className="sr-only">Close Main Menu</span>
            <FaWindowClose aria-hidden="true"/>
          </a>
          <ul>
            <li><a className="button active" id="home-button" href="#home">HOME</a></li>
            <li><a className="button" id="gathering-button" href="#gathering">GATHERING</a></li>
            <li><a className="button" id="about-button" href="#about">ABOUT</a></li>
            <li><a className="button" id="media-button" href="#media">MEDIA</a></li>
            <li><a className="button" id="merch-button" href="#merch">MERCH</a></li>
            <li><a className="button" id="contact-button" href="#contact">CONTACT</a></li> 
          </ul>
        </nav>
        <a href="#main-menu-toggle" className="backdrop" tabIndex={-1} aria-hidden="true" hidden></a>
      </header>
    );
  }

  private toggleMenu(event) {
    let type = event.type;
    let button = this
  }
}

export default Header;