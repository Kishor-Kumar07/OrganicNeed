import React, { Component } from "react";
import { Collapse,  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../Styles/style.css'
class Header extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: false
    };

    
  }

  toggleNavbar() {
       this.setState({
      collapsed: !this.state.collapsed
    })
  }
  closeNavbar(){
    if(this.state.collapsed===true){
      this.toggleNavbar();
    }
  }

  render() {
    return (
      <div>
        <Navbar expand="md" className='TopNavbar' light>
          <NavbarBrand href="/" className='TopNavbarBrand'>
            Organic Need
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar pills>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={this.closeNavbar} className='NavbarItem' to='/' activeClassName="active" exact path="/" activeStyle={{backgroundColor: 'violet', color: 'white'}}> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={this.closeNavbar} className='NavbarItem' to="/shop/" activeClassName="active" exact path="/shop/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={this.closeNavbar} className='NavbarItem' to="/collections/" activeClassName="active" exact path="/collections/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Collection</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={this.closeNavbar} className='NavbarItem' to="/blogs/" activeClassName="active" exact path="/blogs/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Blogs</NavLink>
              </NavItem >
              
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}

export default Header;