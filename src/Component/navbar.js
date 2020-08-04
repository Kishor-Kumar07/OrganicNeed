import React, { Component ,useState} from "react";
import { Collapse,  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Row,Col } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from '../Images/organiclogo502.jpg'
import '../Styles/style.css'
import {useStore} from './store'
function Header(){

  const [collapsed,setCollapsed] = useState(false)

  function toggleNavbar() {
       setCollapsed(
       !collapsed
    )
  }
  function closeNavbar(){
    if(collapsed===true){
      this.toggleNavbar();
    }
  }

 
    const product = useStore(state => state.product)
    return (
      <div>
        <Row style={{margin:'0px',alignItems:'center'}}>
          <Col md={11} sm={10} xs={9}>
        <Navbar expand="md" className='TopNavbar' light>
          <NavbarBrand href="/" className='TopNavbarBrand'>
            
            Organic Need
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} aria-controls="items" />
          <Collapse isOpen={collapsed} navbar id="items">
            <Nav navbar pills className="items">
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/' activeClassName="active" exact path="/" activeStyle={{backgroundColor: 'violet', color: 'white'}}> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/shop/" activeClassName="active" exact path="/shop/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/collections/" activeClassName="active" exact path="/collections/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Collection</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/blogs/" activeClassName="active" exact path="/blogs/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Blogs</NavLink>
              </NavItem >
              
            </Nav>
          </Collapse>
        </Navbar>
        </Col>
        <Col md={1} xs={3} sm={2} >
        <i  className="fa fa-shopping-bag fa-2x" style={{color:'rgb(51, 163, 47)'}}/>
    <span style={{ position: "absolute" }}>{product.length}</span>
    {console.log(product)}
        </Col>
</Row>
      </div>
    );
  }


export default Header;