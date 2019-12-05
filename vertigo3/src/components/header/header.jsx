import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
  this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
      return(
        <AppBar position="static">
          <Router>
            <Toolbar>
        
            </Toolbar>
          </Router>
        </AppBar>
      )
      /*return(
        <div>
          <Router>
            <header>
              <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand href="/">
                    <strong>Navbar</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#">Features</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#">Pricing</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">Options</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </header>
          </Router>
          <MDBContainer style={container} className="text-center mt-5 pt-5">
            <h2>This Navbar is fixed</h2>
            <h5>It will always stay visible on the top, even when you scroll down</h5>
            <br/>
            <p>Full page intro with background image will be always displayed in full screen mode, regardless of device</p>
          </MDBContainer>
        </div>
      );*/
  }
}

export default Header;