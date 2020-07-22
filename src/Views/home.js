import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../Styles/style.css'
import Header from '../Component/carousel.js'
import Products from '../Component/products.js'
import Footer from '../Component/footer.js'
class Home extends Component {
    render() {
        return (
            <div>
           
                <br /><br />
                <Row style={{margin:'0px'}}>
                    <Col className="offset-md-4" md={7}>
                    <Header />
                    </Col>
                </Row>
                <br /><br />
                
                  <Products />
                  <br /><br />
                  <Products />
                  <br /><br />
            <Footer />
            
            </div>
        )
    }
}

export default Home;