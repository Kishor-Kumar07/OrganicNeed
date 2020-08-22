import React from 'react'
import {  Row, Col } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import Alvar from '../Images/alvar.jpg'
 function About() {
    return (
        <div style={{paddingTop:'40px'}}>
           <Row style={{margin:'0px',paddingBottom:'20px'}}>
                <Col className="offset-md-3" md={6} style={{paddingRight:'15px'}}>
                <Carousel showStatus={false} showThumbs={false} showIndicators={false} >
                    <div>
                        <img src={Alvar} />
                    </div>
                </Carousel>
                </Col>
            </Row>
            <div style={{paddingLeft:'70px',paddingTop:'20px',backgroundColor:'rgb(51, 163, 47)'}}>
               <h1 style={{color:'white'}}>Our Vision</h1>
            </div>
            <div style={{paddingLeft:'30px'}}>
                
<h4>We are determined to make the farm to fork supply chain logistics holistic in order to make Indians stronger by providing Organic food in a sustainable and eco-friendly milieu. </h4>

            </div>
            <div style={{paddingLeft:'70px',backgroundColor:'rgb(51, 163, 47)'}}>
               <h1 style={{color:'white'}}> Our Mission</h1>
            </div>
            <div style={{paddingLeft:'30px'}}>
<h4>We are a group of resolute individuals inspired and bound by the ideology and ethos of Nammalvar and decided to join hands to make Organic Farming products easily accessible and strengthen the farm to fork logistics.  </h4>
            </div>
            <div style={{paddingLeft:'70px',backgroundColor:'rgb(51, 163, 47)'}}>
               <h1 style={{color:'white'}}> Our Values</h1>
            </div>
            <div style={{paddingLeft:'30px'}}>
            <h4>* As Nammalvar used to say, Agriculture is not a business, it's a lifestyle.</h4>
            <h4>* We strive for the same.</h4>
            <h4>* Respect and devotion to Mother Nature by employing sustainable and eco-friendly practices in our day to day activities..</h4>
            
            </div>
            <div style={{paddingLeft:'70px',backgroundColor:'rgb(51, 163, 47)'}}>
            <h1 style={{color:'white'}}>Our Commitment</h1>
            </div>
            <div style={{paddingLeft:'30px'}}>
            <h4>Raise / Procure and deliver quality organic foods and products to our consumers.</h4>
            </div>

        </div>
    )
}
export default About;
