import React, { Component } from 'react';
import { Card,CardBody, CardText, CardImg,Button,Container,Row,Col } from 'reactstrap';
import { render } from '@testing-library/react';
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
        <CardText style={{textAlign:'center',paddingTop:'25px',paddingBottom:'25px'}}>
          Rice 
        </CardText>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <CardImg src={pulses} />
        <CardText style={{textAlign:'center'}}>
          Pulses
        </CardText>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <CardImg src={spice} />
        <CardText style={{textAlign:'center'}}>
          Spice
        </CardText>
      </Card>
    </Col>
    </Row>
    <br /> <br />
    <Row>
    <Col md={4}>
      <Card>
        <CardImg src={oil} />
        <CardText style={{textAlign:'center'}}>
          Oil
        </CardText>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <CardImg src={nuts} />
        <CardText style={{textAlign:'center'}}>
          Nuts
        </CardText>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <CardImg src={beauty} />
        <CardText style={{textAlign:'center'}}>
          Beauty
        </CardText>
      </Card>
    </Col>
  </Row>
</Container>
)
}
}

export default Carousel;