import React from 'react';
import '../Styles/style.css'
import { Row,Col,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
function Footer(props) {
    return(
    
        <div>
            <Row style={{margin:'0px'}}>            
                <Col className=" offset-md-3 " md={3}>
                    
                    <ul className="list-unstyled">
                    <li><h5 style={{color:"rgb(51, 163, 47)",paddingBottom:'10px'}}>Top Categories</h5></li>
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
                    <li><h5 style={{color:"rgb(51, 163, 47)",paddingBottom:'10px'}}>Services</h5></li>
                        <li><Link to="/aboutUs/" style={{textDecoration:'none',color:'black'}} >About Us</Link></li>
                        <hr />
                        <li><Link to="/contactUs/" style={{textDecoration:'none',color:'black'}} >Contact Us</Link></li>
                        
                    </ul>
                </Col>
                
                </Row>
                <div className="footer">
                <Row style={{margin:'0px'}}>     
                      
                <Col md={5}>
                    <p style={{color:'white'}}>© All Rights Reserved</p>
                    
                </Col>
               <Col className="offset-md-1" md={4} style={{paddingBottom:'10px'}}>
               <a href="https://www.instagram.com/organiccarechennai/?hl=en" target="_blank">
               <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-instagram" aria-hidden="true"/>
               </Button>
               </a> 
               <a href="https://www.facebook.com/Organiccare-108536217636361/" target="_blank">
               <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-facebook" aria-hidden="true"/>
               </Button>
               </a>
               <a href="https://www.linkedin.com/company/organiccare" target="_blank">
                   <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-linkedin" aria-hidden="true"/>
               </Button>
               </a>
               </Col>
                </Row>
                </div>
                </div>
    
    )
}

export default Footer;