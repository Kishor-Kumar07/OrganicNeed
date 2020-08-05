import React, { Component ,useState} from "react";
import { Collapse,  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Row,Col, Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from '../Images/logo.png'
import '../Styles/style.css'
import {useStore} from './store'
import ReactDrawer from 'react-drawer';
import Sidebar from 'react-sidebar'
import 'react-drawer/lib/react-drawer.css';
function Header(){
  

  const [collapsed,setCollapsed] = useState(false)
  const [sidebarOpen, setOpen] = useState(false)

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
 function onDrawerClose(){
   setOpen(false)
 }
 function onSetSidebarOpen(prop) {
  setOpen(prop);
}
    const product = useStore(state => state.product)
    return (
      <div>
        <Row style={{margin:'0px',paddingTop:'20px'}}>
        <Col md={2} sm={4} xs={5}>
        <img style={{width:'150px'}} src={logo}/>
        </Col>
          <Col md={9} sm={4} xs={3}>
        <Navbar expand="md" className='TopNavbar' light>
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
        <Sidebar
        sidebar={<b>Sidebar content dfgdb adfgfsg gfbrssrb srrbgbhnysbgfffy fbynyngbgf</b>}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{  sidebar: {
          zIndex: 2,
          position: "absolute",
          top: 0,
          bottom: 0,
          transition: "transform .3s ease-out",
          WebkitTransition: "-webkit-transform .3s ease-out",
          willChange: "transform",
          overflowY: "auto"
        } }}
      >
        <i  className="fa fa-shopping-bag fa-2x" style={{color:'rgb(51, 163, 47)'}} onClick={()=>onSetSidebarOpen(true)}/>
    <span style={{ position: "absolute" }}>{product.length}</span>
    </Sidebar>
    {/* <ReactDrawer
          open={open}
          position='right'
          onClose={onDrawerClose}
          noOverlay='false'
          style={{background:'white'}}
          >
          <i onClick={onDrawerClose} className="fa fa-instagram"></i>
          <h2>What a nice drawer !</h2>
        </ReactDrawer> */}

    {console.log(product)}
        </Col>
</Row>
      </div>
    );
  }


export default Header;


