import React, { useState } from 'react';
import Carousel,{consts} from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card,CardBody, CardText, CardImg,Button,Container ,Tooltip,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import '../Styles/style.css'
import {useStore} from './store.js'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
]
 function Products(props){

 function myArrow({ type, onClick, isEdge }) {
 const pointer = type === consts.PREV ? '👈' : '👉'
  return (
    <Button style={{paddingLeft:'20px',paddingRight:'20px',background:'transparent',border:'none',borderColor:'none'}} onClick={onClick} disabled={isEdge}>
      {pointer}
    </Button>
  )
}
  
  const update = useStore(state => state.update)
  const plus = useStore(state => state.plus)
  const minus = useStore(state => state.minus)
  const product = useStore(state => state.product)
  const output = useStore(state => state.output)
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
      if(!product.includes(item))
      update(item)
     }}>
               { <i  className="fa fa-shopping-bag" />}
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
    return(
<div >
   <Container><Carousel loop enableAutoPlay={true} pagination={false} renderArrow={myArrow} breakPoints={breakPoints}>
 {output.map((x,id)=>(
    <div>
         <Card style={{borderRadius:'10px'}}>
           <CardImg src={x.image} />
           <CardBody>
           <CardText className="text">
            <span><i class="fa fa-inr" style={{paddingRight:'10px'}} />{x.price}</span>
            <br />
            <h6>({x.quantity})</h6>
            <Button disabled={x.count<2} style={{backgroundColor:'white',paddingRight:'10px',borderColor:'white'}} onClick={()=>{
      x.count-=1
      x.total=x.count*x.price
      minus(id,output,'output')}} 
      ><i  class="fa fa-minus " style={{color:'red'}} />
      </Button>
      {x.count}
      <Button style={{backgroundColor:'white',paddingLeft:'10px',borderColor:'white'}} onClick={()=>{
      x.count+=1
      x.total=x.count*x.price
      plus(id,output,'output')}} 
      >
      <i class="fa fa-plus " style={{color:'green'}} />
         </Button>
            <br />
            <TooltipItem key={id} item={x} id={id} />
           </CardText>
           </CardBody> 
           </Card>    
    </div> 
))} 

</Carousel>
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

</div>
    )
}



 
 export default Products;

  
  
