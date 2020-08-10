import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Card,CardImg,CardText,Container,Row,Col,Button,Tooltip, Spinner} from 'reactstrap'
import {useStore} from './store.js'
 function Category(props) {
    const { product } = props.match.params
    const prod = useStore(state => state[product])
    const update = useStore(state => state.update)
    const products = useStore(state => state.product)
    const [loading, setLoading] = useState(false)
  const TooltipItem = props => {
    const { item, id } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);
  
    const toggle = () => setTooltipOpen(!tooltipOpen);
  
    return (
      <span>
        <Button id={"Tooltip-" + id} style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}} onClick={()=>{
         setLoading( true );
          setTimeout(() => {
            setLoading( false);
          }, 2000);
        item.count=item.count+1
        item.total=item.count*item.price
      if(!products.includes(item))
      update(item)
     }}>
              {loading && (
            <Spinner size="sm" color="white"/>
              )}
               {!loading && <i  className="fa fa-shopping-bag" />}
               </Button>
        {(!loading && <Tooltip
          placement='bottom'
          isOpen={tooltipOpen}
          target={"Tooltip-" + id}
          toggle={toggle}
        >
         Add To Cart
        </Tooltip>)}
      </span>
    );
  };
    return (
        
          <Container>
  <Row >
      {prod.map((x,id)=>(
 <Col md={4} style={{paddingBottom:'60px'}}>
 <Card style={{borderRadius:'10px'}}>
   <CardImg src={x.image} />
   <CardText className="text">
     <br />
     <h6>{x.englishname}</h6>
     <h6>{x.tamilname}</h6>
     <TooltipItem key={id} item={x} id={id} />
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
