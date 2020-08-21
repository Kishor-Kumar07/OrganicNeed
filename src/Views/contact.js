import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import contact from '../Images/contact.jpg'
 function Contact() {
    return (
        <Container style={{paddingTop:'40px'}}>
            <Row >
                <Col className="offset-md-3" md={6} style={{paddingRight:'15px'}}>
                <Carousel showStatus={false} showThumbs={false} showIndicators={false} >
                    <div>
                        <img src={contact} />
                    </div>
                </Carousel>
                </Col>
            </Row>
            <br />
            <br />
            <Row style={{backgroundColor:'rgb(51, 163, 47)',paddingBottom:'50px',paddingTop:'20px'}}>
                <Col md={6} style={{paddingRight:'0px'}}>
                <i className="fa fa-phone fa-2x" style={{color:'white'}}/><span style={{fontSize:'15px',paddingLeft:'10px'}}>9444222921</span>
                <Col  style={{paddingLeft:'0px'}} className="contact">
                <i className="fa fa-envelope fa-2x" style={{color:'white'}}/><span style={{fontSize:'15px',paddingLeft:'10px'}}> organiccarechennai@gmail.com</span>
                </Col>
                </Col>
                <Col md={6} style={{paddingRight:'0px'}}>
                <i className="fa fa-map-marker fa-2x" style={{color:'white'}}/>   
                <span style={{fontSize:'15px',paddingLeft:'10px'}}>
                Ramanathan St, Mahalingapuram, Nungambakkam, Chennai, Tamil Nadu 600034
                </span>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Contact;
