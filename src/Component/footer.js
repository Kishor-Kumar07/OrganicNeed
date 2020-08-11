import React from 'react';
import '../Styles/style.css'
import { Row,Col,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
function Footer(props) {
    return(
    
        <div>
            <Row style={{margin:'0px'}}>            
                <Col className=" offset-md-1 " md={3}>
                    
                    <ul className="list-unstyled">
                    <li><h5 style={{color:"rgb(51, 163, 47)"}}>Top Categories</h5></li>
                        <li><Link style={{textDecoration:'none',color:'black'}} to="/category/rice">Rice</Link></li>
                        <hr />
                        <li><Link style={{textDecoration:'none',color:'black'}} to="/category/oil">Oil</Link></li>
                        <hr />
                        <li><Link style={{textDecoration:'none',color:'black'}} to="/category/pulse">Pulses</Link></li>
                        <hr />
                        <li><Link style={{textDecoration:'none',color:'black'}} to="/category/spice">Spices</Link></li>
                        <hr />
                        <li><Link style={{textDecoration:'none',color:'black'}} to="/category/nut">Nuts</Link></li>
                        <hr />
                        <li><Link style={{textDecoration:'none',color:'black'}} to="/category/beauty">Beauty Products</Link></li>
                    
                     </ul>
                </Col>
                <Col md={3}>
                <ul className="list-unstyled">
                    <li><h5 style={{color:"rgb(51, 163, 47)"}}>Services</h5></li>
                        <li><Link style={{textDecoration:'none',color:'black'}} >About Us</Link></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Faq's</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Contact Us</a></li>
                        
                    </ul>
                </Col>
                <Col md={3} >
                <ul className="list-unstyled">
                <li><h5 style={{color:"rgb(51, 163, 47)"}}>Privacy {"&"} Terms</h5></li>
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Payment Policy</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Privacy Policy</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Return Policy</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Shipping Policy</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Terms {"&"} Conditions</a></li>
                        </ul>
                </Col>
                </Row>
                <div className="footer">
                <Row style={{margin:'0px'}}>     
                      
                <Col md={5}>
                    <p style={{color:'white'}}>© Copyright 2018 Ristorante Con Fusion</p>
                    
                </Col>
               <Col className="offset-md-1" md={4} style={{paddingBottom:'10px'}}>
                   <a href="https://web.whatsapp.com" target="_blank">
                   <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-whatsapp" aria-hidden="true"/>
               </Button>
               </a>
               <a href="https://facebook.com" target="_blank">
               <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-facebook" aria-hidden="true"/>
               </Button>
               </a>
               <a href="https://instagram.com" target="_blank">
               <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-instagram" aria-hidden="true"/>
               </Button>
               </a>
               <a href="https://gmail.com" target="_blank">
               <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-envelope" aria-hidden="true"/>
               </Button>
               </a>
               </Col>
                </Row>
                </div>
                </div>
    
    )
}

export default Footer;