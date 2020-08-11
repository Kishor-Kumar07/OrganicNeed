import React, { Component,useState } from 'react';
import Carousel,{consts} from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card,CardBody, CardText, CardImg,Button,Container ,Spinner,Tooltip} from 'reactstrap';
import rice from '../Images/rice.jpg'
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
  const product = useStore(state => state.product)
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
      if(!product.includes(item))
      update(item)
     }}>
              {loading && (
            <i class="fa fa-spinner fa-pulse  fa-fw"></i>
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
    return(
<div >
   <Container><Carousel loop enableAutoPlay={true} pagination={false} renderArrow={myArrow} breakPoints={breakPoints}>
 {props.product.map((x,id)=>(
    <div>
         <Card style={{borderRadius:'10px'}}>
           <CardImg src={x.image} />
           <CardBody>
           <CardText className="text">
            {/* <h6>{x.englishname}</h6> */}
            <TooltipItem key={id} item={x} id={id} />
           </CardText>
           </CardBody> 
           </Card>    
    </div> 
))} 

</Carousel>

</Container>

</div>
    )
}



 
 export default Products;

  
  
