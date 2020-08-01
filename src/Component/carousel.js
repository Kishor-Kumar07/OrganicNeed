import React, { Component } from 'react';
import { Card, CardText, CardImg,Container,Row,Col, Button, CardDeck } from 'reactstrap';
import rice from '../Images/rice.jpg'
import oil from '../Images/oilposter.jpg'
import nuts from '../Images/nuts.jpg'
import beauty from '../Images/beauty.jpg'
import spice from '../Images/spice.jpg'
import pulses from '../Images/pulses.jpg'
class Carousel extends Component{
render()
{
return(
<Container>
  <Row>
    <Col md={4}>
      <Card style={{borderRadius:'10px'}}>
        <CardImg src={rice} />
        <CardText className="text">
          <h6 >Rice acts as a  quick source of energy and also rich in carbohydrate and B vitamins.</h6>
          <br />
          <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Shop Now
            </Button> 
        </CardText>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{borderRadius:'10px'}}>
        <CardImg src={nuts} />
        <CardText className="text">
          <h6 >Organic nuts can lower your risk of diabetes , heart disease and will improve the quality of our life</h6>
       
        <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Shop Now
            </Button> 
        </CardText>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{borderRadius:'10px'}}>
        <CardImg src={spice} />
        <CardText className="text">
          <h6 >Organic Spices protect us from acute and chronic diseases.</h6>
          <br />
        <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Shop Now
            </Button> 
        </CardText>
      </Card>
    </Col>
    </Row>
    <br /> <br />
    <Row>
    <Col md={4}>
      <Card style={{borderRadius:'10px'}}>
        <CardImg src={oil} />
        <CardText className="text">
          <h6>Organic Oils are necessary to supply energy to our body and to keep our skin healthy and glowing.</h6>
        <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Shop Now
            </Button> 
        </CardText>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{borderRadius:'10px'}}>
        <CardImg src={pulses} />
        <CardText className="text">
          <h6>Organic Pulses provide protein and fibre, and also act as a source of vitamins and minerals.</h6>
        <br />
        <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Shop Now
            </Button> 
        </CardText>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{borderRadius:'10px'}}>
        <CardImg src={beauty} />
        <CardText className="text">
          <h6>Organic Beauty Products are better for your skin, health and also to the environment.</h6>
       <br />
        <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Shop Now
            </Button> 
        </CardText>
      </Card>
    </Col>
  </Row>
</Container>
)
}
}

export default Carousel;