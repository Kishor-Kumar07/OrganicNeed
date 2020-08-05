import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Card,CardImg,CardText,Container,Row,Col} from 'reactstrap'
import {useStore} from './store.js'
 function Category(props) {
    const { product } = props.match.params
    const prod = useStore(state => state[product])
    return (
        
          <Container>
  <Row>
      {prod.map(product=>(
 <Col md={4}>
 <Card style={{borderRadius:'10px'}}>
   <CardImg src={product.image} />
   <CardText className="text">
     <br />
     <h6>{product.englishname}</h6>
   </CardText>
  
 </Card>
</Col>
      ))
    }
        </Row>
        </Container>
    )
}

export default Category;
