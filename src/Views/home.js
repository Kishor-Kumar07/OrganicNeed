import React, { Component } from 'react';
import {  Row, Col, CardText,Container,Card,Button} from 'reactstrap';
import '../Styles/style.css'
import Header from '../Component/header.js'
import Products from '../Component/products.js'
import Category from '../Component/carousel.js'
import Mix from '../Component/mix.js'
import deliver from '../Images/delivery.jpg'
import Footer from '../Component/footer.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Home extends Component {
    
    render() {
        return (
            <div>
           
                <br /><br />
                <Row style={{margin:'0px'}}>
                    <Col md={4} style={{paddingBottom:'20px'}}>
                    <Carousel showStatus={false} showThumbs={false} showIndicators={false} >
                     <img src={deliver} />
                    </Carousel> 
                    </Col>
                    <Col  md={8}>
                    <Header />
                    </Col>
                </Row>
                <br /><br />
                <Mix />
                <br /><br />
                <Category />
                <br /><br />
                  <Products />
                  <br /><br />
                  <h4 className="text">Follow Us</h4>
                  <Container>
  <Row>
    <Col md={4} style={{paddingBottom:'40px'}}>
       <Card style={{backgroundColor:'#d3d3d3'}}>
           <CardText className="text">
               <i className="fa fa-instagram fa-2x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4><span style={{color:'rgb(51, 163, 47)'}}>@Organic</span>Care</h4>
               <h5>Follow us on Instagram</h5><br />
               <a href="https://www.instagram.com/organiccarechennai/?hl=en" target="_blank">
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  
           </a>
           </CardText>
       </Card>
    </Col>
    <Col md={4} style={{paddingBottom:'40px'}}>
       <Card style={{backgroundColor:'#d3d3d3'}}>
           <CardText className="text">
               <i className="fa fa-facebook fa-2x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4><span style={{color:'rgb(51, 163, 47)'}}>@Organic</span>Care</h4>
               <h5>Follow us on FaceBook</h5><br />
               <a href="https://www.facebook.com/Organiccare-108536217636361/" target="_blank">
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  
            </a>
           </CardText>
       </Card>
    </Col>
    <Col md={4} style={{paddingBottom:'40px'}}>
       <Card style={{backgroundColor:'#d3d3d3'}}>
           <CardText className="text">
               <i className="fa fa-linkedin fa-2x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4><span style={{color:'rgb(51, 163, 47)'}}>@Organic</span>Care</h4>
               <h5>Follow us on LinkedIn</h5><br />
               <a href="https://www.linkedin.com/company/organiccare" target="_blank">
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  
            </a>
           </CardText>
       </Card>
    </Col>
    </Row>
    </Container>
                  
    <Footer />
            
            </div>
        )
    }
}

export default Home;