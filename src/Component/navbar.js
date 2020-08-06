import React, { Component ,useState} from "react";
import { Collapse,  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Row,Col, Button,Badge } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from '../Images/logo.png'
import '../Styles/style.css'
import {useStore} from './store'
import ReactDrawer from 'react-drawer';
import Sidebar from 'react-sidebar'
import SideNav from 'react-simple-sidenav';
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
    const element = product.map(prod=>(
    <div>
    <h5>{prod.englishname}</h5>
    <i class="fa fa-bars" />
    </div>
    ))
    return (
      <div>
        <Row style={{margin:'0px',paddingTop:'20px'}}>
        <Col md={4} sm={8} xs={5}>
        <img className="logo" src={logo}/>
        </Col>
          <Col md={6}  sm={2} xs={4} className="offset-xs-1">
        <Navbar expand="md" className='TopNavbar' light>
          <NavbarToggler onClick={toggleNavbar} aria-controls="items" />
          <Collapse isOpen={collapsed} navbar id="items">
            <Nav navbar pills className="items">
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/' activeClassName="active" exact path="/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/category/rice' activeClassName="active" exact path="/category/rice" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>Rice</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/category/oil' activeClassName="active" exact path="/category/oil" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>Oil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/category/nut' activeClassName="active" exact path="/category/nut" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>Nuts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/category/pulse' activeClassName="active" exact path="/category/pulse" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>Pulses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/category/beauty' activeClassName="active" exact path="/category/beauty" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>Beauty </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/category/spice' activeClassName="active" exact path="/category/spice" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>Spice</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/blogs/" activeClassName="active" exact path="/blogs/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>Blogs</NavLink>
              </NavItem >
              
            </Nav>
          </Collapse>
        </Navbar>
        </Col>
        <Col md={1} xs={3} sm={2} className="offset-md-1" >
        {/* <Sidebar
        sidebar={<b>Sidebar content dfgdb adfgfsg gfbrssrb srrbgbhnysbgfffy fbynyngbgf</b>}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{  sidebar: {
          zIndex: 2,
          position: "absolute",
          top: 0,
          bottom: 0,
          background: "white",
          transition: "transform .3s ease-out",
          WebkitTransition: "-webkit-transform .3s ease-out",
          willChange: "transform",
          overflowY: "auto"
        } }}
      > */}
        <i  className="fa fa-shopping-bag fa-2x" style={{color:'rgb(51, 163, 47)'}} onClick={()=>onSetSidebarOpen(true)}/>
    <Badge style={{ position: "absolute" }} color="success">{product.length}</Badge>
    <SideNav showNav={sidebarOpen} openFromRight="true" title="Organic Care Cart" titleStyle={{backgroundColor:'rgb(51, 163, 47)'}}  items={element} onHideNav={() => onSetSidebarOpen(false)} />
    {/* </Sidebar> */}
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


