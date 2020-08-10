import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Card,CardImg,CardText,Container,Row,Col,Button} from 'reactstrap'
import {useStore} from './store.js'
 function Category(props) {
    const { product } = props.match.params
    const prod = useStore(state => state[product])
    const update = useStore(state => state.update)
    const products = useStore(state => state.product)
    return (
        
          <Container>
  <Row >
      {prod.map(x=>(
 <Col md={4} style={{paddingBottom:'60px'}}>
 <Card style={{borderRadius:'10px'}}>
   <CardImg src={x.image} />
   <CardText className="text">
     <br />
     <h6>{x.englishname}</h6>
     <h6>{x.tamilname}</h6>
     <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}} onClick={()=>{
        x.count=x.count+1
        x.total=x.count*x.price
      if(!products.includes(x))
      update(x)
     }}>
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
