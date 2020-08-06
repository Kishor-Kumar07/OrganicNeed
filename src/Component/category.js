import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Card,CardImg,CardText,Container,Row,Col,Button} from 'reactstrap'
import {useStore} from './store.js'
 function Category(props) {
    const { product } = props.match.params
    const prod = useStore(state => state[product])
    const update = useStore(state => state.update)
    return (
        
          <Container>
  <Row >
      {prod.map(product=>(
 <Col md={4} style={{paddingBottom:'60px'}}>
 <Card style={{borderRadius:'10px'}}>
   <CardImg src={product.image} />
   <CardText className="text">
     <br />
     <h6>{product.englishname}</h6>
     <h6>{product.tamilname}</h6>
     <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}} onClick={()=>update(product)}>
               {<i  className="fa fa-shopping-bag" />}
               </Button>
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
