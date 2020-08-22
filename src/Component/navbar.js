import React, { useState} from "react";
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink,Row,Col, Button,Badge } from 'reactstrap';
import { NavLink as RRNavLink ,Link} from 'react-router-dom';
import logo from '../Images/logo.png'
import '../Styles/style.css'
import {useStore} from './store'
import SideNav from 'react-simple-sidenav';
import 'react-drawer/lib/react-drawer.css';
import ScrollArea from 'react-scrollbar'
function Header(){
  

  const [collapsed,setCollapsed] = useState(false)
  const [sidebarOpen, setOpen] = useState(false)
  const [bar, setbarOpen] = useState(false)
  function toggleNavbar() {
       setCollapsed(
       !collapsed
    )
  }
  function onSetBar(prop){
    setbarOpen(prop);
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
    var total=0;
    product.map((prod,i)=>(
      total+=prod.total
    ))
    const element =<div>
    <i class="fa fa-times-circle" style={{fontSize:'30px'}} onClick={()=>onSetSidebarOpen(false)}/>
    {product.length>0?
    (
    <ScrollArea>
    <div style={{paddingTop:'30px',paddingLeft:'30px'}}>
    {product.map((prod,i)=>(
    <div>
      <Row>
        <Col md={2} sm={2} xs={2}>
        <img height="50px" src={prod.image} style={{paddingRight:'10px'}}/>  
        </Col>
        <Col md={7} sm={7} xs={6}>
      {prod.englishname} ({prod.quantity})
      </Col>
      <Col md={3} sm={3} xs={4}>
      <span style={{paddingLeft:'30px'}}><i class="fa fa-trash" style={{ color: 'red'}} onClick={()=>{
      prod.count=0
      prod.total=0
      updatetrash(prod.englishname)}}/></span>
      </Col>
    </Row>
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
         </Button><span style={{paddingLeft:'40px'}}><i class="fa fa-inr" style={{paddingRight:'10px'}} />{prod.total}</span></h4>
    </div>
    ))}
    <div style={{paddingTop:'30px',paddingBottom:'40px'}}>
    
    <h5><b>Subtotal</b><span style={{paddingLeft:'100px'}}><i class="fa fa-inr" style={{paddingRight:'10px'}} />{total}</span></h5>
    <Link to="/checkout">
      <div style={{paddingTop:'20px',paddingLeft:'70px'}}>
    <Button style={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}} onClick={() => onSetSidebarOpen(false)}>
      Checkout
    </Button>
    </div> 
    </Link> 
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
        
        
        <Navbar expand="lg" className='TopNavbar' light style={{justifyContent:'space-between'}} >
          <div className="bars" >
            <Button onClick={()=>onSetBar(true)} style={{backgroundColor:'rgb(51, 163, 47)',color:'white'}}><i class="fa fa-bars" /></Button>
            <SideNav showNav={bar} children={
       <div>
         
       <i class="fa fa-times-circle" style={{fontSize:'30px',paddingLeft:'10px'}} onClick={()=>onSetBar(false)}/>
       <NavLink tag={RRNavLink} onClick={()=>onSetBar(false)} className='NavbarItem' to='/' activeClassName="active" exact path="/" style={{color:'black'}} activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}> Home </NavLink>
       <NavLink tag={RRNavLink} onClick={()=>onSetBar(false)} className='NavbarItem' to="/aboutUs/" activeClassName="active" exact path="/aboutUs/" style={{color:'black'}} activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>AboutUs</NavLink>
       <NavLink tag={RRNavLink} onClick={()=>onSetBar(false)} className='NavbarItem' to="/contactUs/" activeClassName="active" exact path="/contactUs/" style={{color:'black'}} activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>ContactUs</NavLink>
       <a href="https://organicproductswecare.blogspot.com/" target="_blank" style={{textDecoration:'none'}}> 
               <NavLink onClick={()=>onSetBar(false)} style={{color:'gray',paddingTop:'7px'}} className='NavbarItem' activeClassName="active" activeClassName="active" exact path="/contactUs/" style={{color:'black'}} activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>
                Blogs
                </NavLink >
                 </a> 
  </div>
  } onHideNav={() => onSetBar(false)} />
          </div>
          <NavbarBrand href="/#">  <img className="logo" src={logo}/></NavbarBrand>
           <div className="items">
            <Nav navbar pills  >
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to='/' activeClassName="active" exact path="/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/aboutUs/" activeClassName="active" exact path="/aboutUs/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>AboutUs</NavLink>
              </NavItem >
              <NavItem>
                <NavLink tag={RRNavLink} onClick={closeNavbar} className='NavbarItem' to="/contactUs/" activeClassName="active" exact path="/contactUs/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>ContactUs</NavLink>
              </NavItem >
              
              
               <a href="https://organicproductswecare.blogspot.com/" target="_blank" style={{textDecoration:'none'}}> 
               <NavItem style={{color:'gray',paddingTop:'7px'}} className='NavbarItem' activeClassName="active" activeClassName="active" exact path="/contactUs/" activeStyle={{backgroundColor: 'rgb(51, 163, 47)', color: 'white'}}>
                Blogs
                </NavItem >
                 </a> 
              
              
            
            </Nav>
            </div>
         
         <span className="cart"><i  className="fa fa-shopping-bag fa-2x" style={{color:'rgb(51, 163, 47)'}} onClick={()=>onSetSidebarOpen(true)}/>
    <Badge style={{ position: "absolute" }} color="success">{product.length}</Badge></span>
         
        </Navbar>

    <SideNav showNav={sidebarOpen} openFromRight="true" title="Organic Care Cart"   children={
      element
    } onHideNav={() => onSetSidebarOpen(false)} />
      </div>
    );
  }


export default Header;


