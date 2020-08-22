import React, { Component } from 'react';
import {  Row, Col, CardText,Container,Card,Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import '../Styles/style.css'
import Header from '../Component/header.js'
import Products from '../Component/products.js'
import Category from '../Component/carousel.js'
import deliver from '../Images/delivery.jpg'
import Footer from '../Component/footer.js'
import {Link} from 'react-router-dom'
class Home extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            prod:[],
            oil:[],
            nut:[],
            pulse:[],
            rice:[],
            spice:[],
            beauty:[]
        }
    }
    async componentDidMount()
    {
        var output,oil,rice,spice,pulse,beauty,nut;
    output = await (await fetch('http://13.233.120.227:8080/api/products')).json()
    oil= await(await fetch('http://13.233.120.227:8080/api/products?category=Oil')).json()
    rice= await(await fetch('http://13.233.120.227:8080/api/products?category=Rice')).json()
    spice= await(await fetch('http://13.233.120.227:8080/api/products?category=Spices')).json()
    pulse= await(await fetch('http://13.233.120.227:8080/api/products?category=Pulses')).json()
    beauty= await(await fetch('http://13.233.120.227:8080/api/products?category=Beauty products')).json()
    nut= await(await fetch('http://13.233.120.227:8080/api/products?category=Nuts')).json()
    this.setState({ prod: output,fetched:true,oil:oil,spice:spice,nut:nut,rice:rice,beauty:beauty,pulse:pulse })
    }
    render() {
        return (
            <div>
           {/* <Row style={{margin:'0px'}}>
                  <Col md={5} className="offset-md-5">
                   <Breadcrumb style={{backgroundColor:'white'}}>
                   <BreadcrumbItem><Link to='/category/rice'>Rices</Link></BreadcrumbItem>
                   <BreadcrumbItem><Link to='/category/spice'>Spices</Link></BreadcrumbItem>
                   <BreadcrumbItem><Link to='/category/nut'>Nuts</Link></BreadcrumbItem>
                   <BreadcrumbItem><Link to='/category/oil'>Oils</Link></BreadcrumbItem>
                   <BreadcrumbItem><Link to='/category/pulse'>Pulses</Link></BreadcrumbItem>
                   <BreadcrumbItem><Link to='/category/beauty'>Beauty Products</Link></BreadcrumbItem>
                   </Breadcrumb>
                   </Col>
           </Row> */}
                <br /><br />
                <Row style={{margin:'0px'}}>
                    <Col md={4} style={{paddingLeft:'20px',alignSelf:'center',alignItems:'center',paddingBottom:'20px'}}>
                     {/* <Typist  > 
                        <h2 style={{color:'rgb(51, 163, 47)'}}> Let food be thy medicine and medicine be thy food</h2>
                     </Typist> */}
                     <img src={deliver} className="deliver"/>
                    </Col>
                    <Col  md={8}>
                    <Header />
                    </Col>
                </Row>
                <br /><br />
                <Category state={this.state}/>
                <br /><br />
                  <Products product={this.state.prod}/>
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
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  

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