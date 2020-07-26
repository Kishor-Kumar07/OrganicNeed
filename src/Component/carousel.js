import React, { Component } from 'react';
import { Card, CardText, CardImg,Container,Row,Col, Button } from 'reactstrap';
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