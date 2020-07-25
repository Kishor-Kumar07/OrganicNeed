import React from 'react';
import '../Styles/style.css'
import { Container,Row,Col,Button } from 'reactstrap';
function Footer(props) {
    return(
    
        <div>
            <Row style={{margin:'0px'}}>            
                <Col className=" offset-md-1 " md={3}>
                    
                    <ul className="list-unstyled">
                    <li><h5 style={{color:"rgb(51, 163, 47)"}}>Top Categories</h5></li>
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Fruits</a></li>
                        <hr />
                        <li><a href="#">Fast Foods</a></li>
                        <hr />
                        <li><a href="#">Vegetables</a></li>
                        
                    </ul>
                </Col>
                <Col md={3}>
                <ul className="list-unstyled">
                    <li><h5 style={{color:"rgb(51, 163, 47)"}}>Services</h5></li>
                        <li><a href="#">About Us</a></li>
                        <hr />
                        <li><a href="#">Faq's</a></li>
                        <hr />
                        <li><a href="#">Contact Us</a></li>
                        <hr />
                        <li><a href="#">News</a></li>
                        <hr />
                        <li><a href="#">SiteMap</a></li>
                        
                    </ul>
                </Col>
                <Col md={4} className="align-self-center">
                <ul className="list-unstyled">
                <li><h5 style={{color:"rgb(51, 163, 47)"}}>Privacy {"&"} Terms</h5></li>
                        <li><a href="#">Payment Policy</a></li>
                        <hr />
                        <li><a href="#">Privacy Policy</a></li>
                        <hr />
                        <li><a href="#">Return Policy</a></li>
                        <hr />
                        <li><a href="#">Shipping Policy</a></li>
                        <hr />
                        <li><a href="#">Terms {"&"} Conditions</a></li>
                        </ul>
                </Col>
                </Row>
                <div className="footer">
                <Row style={{margin:'0px'}}>     
                      
                <Col md={5}>
                    <p style={{color:'white'}}>© Copyright 2018 Ristorante Con Fusion</p>
                    
                </Col>
               <Col md={4}>
                   <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-whatsapp" aria-hidden="true"/>
               </Button>
               </Col>
                </Row>
                </div>
                </div>
    
    )
}

export default Footer;