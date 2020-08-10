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
import ScrollArea from 'react-scrollbar'
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
    const updatetrash = useStore(state => state.updatetrash)
    var array = product; 
    var total=0;
    product.map((prod,i)=>(
      total+=prod.total
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
    <SideNav showNav={sidebarOpen} openFromRight="true" title="Organic Care Cart" titleStyle={{backgroundColor:'rgb(51, 163, 47)'}}  children={
      product.length>0?
      (
      <ScrollArea>
      <div style={{paddingTop:'30px',paddingLeft:'50px'}}>
      {product.map((prod,i)=>(
      <div>
        <img height="50px" src={prod.image}/>
      <h6>{prod.englishname}<span style={{paddingLeft:'20px'}}><i class="fa fa-trash" style={{ color: 'red'}} onClick={()=>{
        prod.count=0
        prod.total=0
        updatetrash(prod.englishname)}}/></span></h6>
      <h6><span>{prod.count}</span> *  {prod.price}       <span style={{paddingLeft:'40px'}}>{prod.total}</span></h6>
      </div>
      ))}
      <div style={{paddingTop:'30px',paddingBottom:'40px'}}>
      <h5>{total}</h5>
      <Button style={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>
        View Cart
      </Button>
      <span style={{paddingLeft:'50px'}}>
      <Button style={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>
        Checkout
      </Button>
      </span>
      </div>
       </div>
       </ScrollArea>)
       :
       <div>
         <h5>Cart Is Empty</h5>
       </div>
    } onHideNav={() => onSetSidebarOpen(false)} />
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


