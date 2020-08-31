import React,{useState} from 'react'
import {Card,CardImg,CardText,Container,Row,Col,Button,Tooltip,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import {useStore} from './store.js'
 function Category(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const { product } = props.match.params
    const prod = useStore(state => state[product])
    const plus = useStore(state => state.plus)
    const minus = useStore(state => state.minus)
    const update = useStore(state => state.update)
    const products = useStore(state => state.product)
    const [loading, setLoading] = useState(false)
    const togglemodal = () => setLoading(!loading);
  const TooltipItem = props => {
    const { item, id } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);
  
    const toggle = () => setTooltipOpen(!tooltipOpen);
  
    return (
      <span>
        <Button id={"Tooltip-" + id} style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}} onClick={()=>{
        togglemodal()
      if(!products.includes(item))
      update(item)
     }}>
             
               {<i  className="fa fa-shopping-bag" />}
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
        
          <Container style={{paddingTop:'40px'}}>
  <Row >
      {prod.map((x,id)=>(
 <Col md={4} style={{paddingBottom:'60px'}}>
 <Card style={{borderRadius:'10px'}}>
   <CardImg src={x.image} />
   <CardText className="text">
     <br />
     <h6>{x.englishname}</h6>
     <h6>{x.tamilname}</h6>
     <span><i class="fa fa-inr" style={{paddingRight:'10px'}} />{x.price}</span>
      <h6>({x.quantity})</h6>
     <Button disabled={x.count<2} style={{backgroundColor:'white',paddingRight:'10px',borderColor:'white'}} onClick={()=>{
      x.count-=1
      x.total=x.count*x.price
      minus(id,prod,product)}} 
      ><i  class="fa fa-minus " style={{color:'red'}} />
      </Button>
      {x.count}
      <Button style={{backgroundColor:'white',paddingLeft:'10px',borderColor:'white'}} onClick={()=>{
      x.count+=1
      x.total=x.count*x.price
      plus(id,prod,product)}} 
      >
      <i class="fa fa-plus " style={{color:'green'}} />
         </Button>
            <br />
     <TooltipItem key={id} item={x} id={id} />
   </CardText>
  
 </Card>
</Col>
      ))
    }
        </Row>
        <Modal isOpen={loading} toggle={togglemodal} >
        <ModalHeader toggle={togglemodal}>Item</ModalHeader>
        <ModalBody>
       Item Added to Cart
       </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={togglemodal}>OK</Button>
        </ModalFooter>
      </Modal>
        </Container>
    )
}

export default Category;
