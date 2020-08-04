import React, { Component } from 'react';
import {  Row, Col, CardText,Container,Card,Button } from 'reactstrap';
import '../Styles/style.css'
import Header from '../Component/header.js'
import Products from '../Component/products.js'
import Category from '../Component/carousel.js'
import Footer from '../Component/footer.js'
class Home extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            prod:[]
        }
    }
    async componentDidMount()
    {
        var output;
    output = await (await fetch('http://13.232.137.75:5000/api/products')).json()
    this.setState({ prod: output,fetched:true })
    }
    render() {
        return (
            <div>
           
                <br /><br />
                <Row style={{margin:'0px'}}>
                    <Col className="offset-md-3" md={8}>
                    <Header />
                    </Col>
                </Row>
                <br /><br />
                <Category />
                <br /><br />
                  <Products product={this.state.prod}/>
                  <br /><br />
                  <h4 className="text">Follow Us</h4>
                  <Container>
  <Row>
    <Col md={4}>
       <Card style={{backgroundColor:'grey'}}>
           <CardText className="text">
               <i className="fa fa-instagram fa-4x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4>@OrganicNeed</h4>
               <h5>Follow us on instagram</h5><br />
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  

           </CardText>
       </Card>
    </Col>
    <Col md={4}>
       <Card style={{backgroundColor:'grey'}}>
           <CardText className="text">
               <i className="fa fa-whatsapp fa-4x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4>@OrganicNeed</h4>
               <h5>Follow us on whatsapp</h5><br />
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  

           </CardText>
       </Card>
    </Col>
    <Col md={4}>
       <Card style={{backgroundColor:'grey'}}>
           <CardText className="text">
               <i className="fa fa-linkedin fa-4x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4>@OrganicNeed</h4>
               <h5>Follow us on LinkedIn</h5><br />
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  

           </CardText>
       </Card>
    </Col>
    </Row>
    </Container>
                  <br /><br />
            <Footer />
            
            </div>
        )
    }
}

export default Home;