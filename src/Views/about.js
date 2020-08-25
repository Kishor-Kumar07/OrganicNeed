import React from 'react'
import {  Row, Col } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import Alvar from '../Images/alvar.jpg'
import Alvar1 from '../Images/alvarabout.jpeg'
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
            <div style={{paddingLeft:'30px',paddingTop:'20px'}}>
            <h1 style={{color:'rgb(51, 163, 47)',fontFamily:'Garamond'}}> About Us</h1>
            </div>
            <div style={{paddingLeft:'70px'}}>
            <span style={{fontFamily:'Andale Mono',justifyContent:'center'}} className="call">
            We are a group of four friends who went to school together and ended up becoming Engineers, Doctors and Food Enthusiasts. The civil engineer among us was inspired by Nammalvar and attended his workshops and his Zero budget natural farming and in turn pulled us all into his fold and he started doing small scale natural farming operations.
            </span>
            <Row style={{margin:'0px',paddingTop:'40px',paddingBottom:'40px'}}>
                <Col className="offset-md-3" md={6} style={{paddingRight:'15px'}}>
                <Carousel showStatus={false} showThumbs={false} showIndicators={false} >
                    <div>
                        <img src={Alvar1} />
                    </div>
                </Carousel>
                </Col>
            </Row>
            <span style={{fontFamily:'Andale Mono',justifyContent:'center'}} className="call"> With multi-fold rise in common lifestyle diseases across our nation, the doctor among us insisted that we ought to have naturally grown food to overcome the avalanche of lifestyle diseases wiping out our families. Our parents who were already suffering from these effects made it a necessity for us to make the switch to this Organic way of life from the conventional path taken by the masses.
            </span>
            <br />
            <br />
            <span style={{fontFamily:'Andale Mono',justifyContent:'center'}} className="call"> It was more of a way to save us and our children from the impending ailments. Having benefited from the natural way of life, we thought of helping our community have access to quality natural farming products in making the last mile connectivity. As a result, we all came forward to create this initiative to serve our fellow people with care and started this venture Organic Care.
            </span>
            </div>
            <div style={{paddingLeft:'30px',paddingTop:'20px'}}>
               <h1 style={{color:'rgb(51, 163, 47)',fontFamily:'Garamond'}}> Our Mission</h1>
            </div>
            <div style={{paddingLeft:'70px',}}>
<span style={{fontFamily:'Andale Mono'}} className="call">We are a group of resolute individuals inspired and bound by the ideology and ethos of Nammalvar and decided to join hands to make Organic Farming products easily accessible and strengthen the farm to fork logistics.  </span>
            </div>
            <div style={{paddingLeft:'30px',paddingTop:'20px'}}>
               <h1 style={{color:'rgb(51, 163, 47)',fontFamily:'Garamond'}}>Our Vision</h1>
            </div>
            <div style={{paddingLeft:'70px',}}>
                
<span style={{fontFamily:'Andale Mono'}} className="call">We are determined to make the farm to fork supply chain logistics holistic in order to make Indians stronger by providing Organic food in a sustainable and eco-friendly milieu. </span>

            </div>
            <div style={{paddingLeft:'30px',paddingTop:'20px'}}>
               <h1 style={{color:'rgb(51, 163, 47)',fontFamily:'Garamond'}}> Our Values</h1>
            </div>
            <div style={{paddingLeft:'70px'}}>
            <span style={{fontFamily:'Andale Mono'}} className="call">* As Nammalvar used to say, Agriculture is not a business, it's a lifestyle.</span>
           <br />
            <span style={{fontFamily:'Andale Mono'}} className="call">* We strive for the same.</span>
           <br />
            <span style={{fontFamily:'Andale Mono'}} className="call">* Respect and devotion to Mother Nature by employing sustainable and eco-friendly practices in our day to day activities..</span>
            
            </div>
            <div style={{paddingLeft:'30px',paddingTop:'20px'}}>
            <h1 style={{color:'rgb(51, 163, 47)',fontFamily:'Garamond'}}>Our Commitment</h1>
            </div>
            <div style={{paddingLeft:'70px'}}>
            <span style={{fontFamily:'Andale Mono'}} className="call">Raise / Procure and deliver quality organic foods and products to our consumers.</span>
            </div>

        </div>
    )
}
export default About;
