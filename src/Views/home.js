import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../Styles/style.css'
import Header from '../Component/header.js'
import Products from '../Component/products.js'
import Category from '../Component/carousel.js'
import Footer from '../Component/footer.js'
class Home extends Component {
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