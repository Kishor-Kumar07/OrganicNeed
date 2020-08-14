import React, { Component ,useState} from "react";
import { Collapse,  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Row,Col, Button,Badge } from 'reactstrap';
import { NavLink as RRNavLink ,Link} from 'react-router-dom';
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
      toggleNavbar();
    }
  }
 function onSetSidebarOpen(prop) {
  setOpen(prop);
} 

    const product = useStore(state => state.product)
    const plus = useStore(state => state.plus)
    const minus = useStore(state => state.minus)
    const updatetrash = useStore(state => state.updatetrash)
    var array = product; 
    var total=0;
    product.map((prod,i)=>(
      total+=prod.total
    ))
    const element =<div>
    <i class="fa fa-times-circle" style={{fontSize:'30px'}} onClick={()=>onSetSidebarOpen(false)}/>
    {product.length>0?
    (
    <ScrollArea>
    <div style={{paddingTop:'30px',paddingLeft:'50px'}}>
    {product.map((prod,i)=>(
    <div>
      <span><img height="50px" src={prod.image} style={{paddingRight:'20px'}}/>  
      {prod.englishname}<span style={{paddingLeft:'30px'}}><i class="fa fa-trash" style={{ color: 'red'}} onClick={()=>{
      prod.count=0
      prod.total=0
      updatetrash(prod.englishname)}}/></span>
    </span>
    <h4 style={{paddingTop:'10px'}}><Button disabled={prod.count<2} style={{backgroundColor:'white',paddingRight:'10px',borderColor:'white'}} onClick={()=>{
      prod.count-=1
      prod.total=prod.count*prod.price
      minus(i,product)}} 
      ><i  class="fa fa-minus " style={{color:'red'}} />
      </Button>
      {prod.count}
      <Button style={{backgroundColor:'white',paddingLeft:'10px',borderColor:'white'}} onClick={()=>{
      prod.count+=1
      prod.total=prod.count*prod.price
      plus(i,product)}} 
      >
      <i class="fa fa-plus " style={{color:'green'}} />
         </Button><span style={{paddingLeft:'40px'}}>${prod.total}</span></h4>
    </div>
    ))}
    <div style={{paddingTop:'30px',paddingBottom:'40px'}}>
    
    <h5><b>Subtotal</b><span style={{paddingLeft:'100px'}}>${total}</span></h5>
    <span style={{paddingLeft:'70px'}}>
    <Link to="/checkout">
    <Button style={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}} onClick={() => onSetSidebarOpen(false)}>
      Checkout
    </Button> 
    </Link> 
    </span>
    </div>
     </div>
     </ScrollArea>)
     :  
     <div style={{paddingLeft:'30%',paddingTop:'20%'}}>
       <i class="fa fa-shopping-cart fa-5x" aria-hidden="true"/>
       <h5 style={{paddingTop:'10%'}}>Cart is Empty</h5>
     </div>
  }
     </div>
    
    return (
      <div>
        
        
        <Navbar expand="lg" className='TopNavbar' light >
          <NavbarBrand>  <img className="logo" src={logo}/></NavbarBrand>
          <NavbarToggler className="toggle" onClick={toggleNavbar} aria-controls="items" />
          <Collapse isOpen={collapsed} navbar id="items" >
            <Nav navbar pills className="items" >
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/' activeClassName="active" exact path="/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/aboutUs/" activeClassName="active" exact path="/aboutUs/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>About Us</NavLink>
              </NavItem >
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/contactUs/" activeClassName="active" exact path="/contactUs/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>contact Us</NavLink>
              </NavItem >
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/blogs/" activeClassName="active" exact path="/blogs/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>Blogs</NavLink>
              </NavItem >
              
            </Nav>
          </Collapse>
         <NavbarBrand >
         <span style={{paddingRight:'20px'}}><i  className="fa fa-shopping-bag fa-2x" style={{color:'rgb(51, 163, 47)'}} onClick={()=>onSetSidebarOpen(true)}/>
    <Badge style={{ position: "absolute" }} color="success">{product.length}</Badge></span>
         </NavbarBrand>
        </Navbar>

    <SideNav showNav={sidebarOpen} openFromRight="true" title="Organic Care Cart"   children={
      element
    } onHideNav={() => onSetSidebarOpen(false)} />
    
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
        

      </div>
    );
  }


export default Header;


