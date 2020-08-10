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
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Fruits</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Fast Foods</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Vegetables</a></li>
                        
                    </ul>
                </Col>
                <Col md={3}>
                <ul className="list-unstyled">
                    <li><h5 style={{color:"rgb(51, 163, 47)"}}>Services</h5></li>
                        <li><Link to={{
  pathname: '/kishore',
  state:{
      from:true
  }
}}style={{textDecoration:'none',color:'black'}} >About Us</Link></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Faq's</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>Contact Us</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>News</a></li>
                        <hr />
                        <li><a href="#" style={{textDecoration:'none',color:'black'}}>SiteMap</a></li>
                        
                    </ul>
                </Col>
                <Col md={4} className="align-self-center">
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
                   <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-whatsapp" aria-hidden="true"/>
               </Button>
               <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-facebook" aria-hidden="true"/>
               </Button>
               <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-instagram" aria-hidden="true"/>
               </Button>
               <Button style={{color:"rgb(51, 163, 47)",backgroundColor:'white'}}>
               <i className="fa fa-envelope" aria-hidden="true"/>
               </Button>
               </Col>
                </Row>
                </div>
                </div>
    
    )
}

export default Footer;