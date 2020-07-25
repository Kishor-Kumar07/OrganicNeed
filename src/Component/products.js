import React, { Component } from 'react';
import HorizontalGallery from 'react-dynamic-carousel'
import Carousel,{consts} from "react-elastic-carousel";
import Item from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card,CardBody, CardText, CardImg,Button,Container } from 'reactstrap';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import rice from '../Images/rice.jpg'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const example = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20];
let pointer = null
 class products extends Component{
constructor(props){
  super(props)
  this.items= [
    {id: 1, title: 'item #1'},
    {id: 2, title: 'item #2'},
    {id: 3, title: 'item #3'},
    {id: 4, title: 'item #4'},
    {id: 5, title: 'item #5'}
  ]
  this.breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
  this.state={
    prod:[],
    fetched:false
  }
}
myArrow({ type, onClick, isEdge }) {
  pointer = type === consts.PREV ? '👈' : '👉'
  return (
    <Button style={{paddingLeft:'20px',paddingRight:'20px',background:'transparent',border:'none',borderColor:'none'}} onClick={onClick} disabled={isEdge}>
      {pointer}
    </Button>
  )
}
  async componentDidMount() {
    var output;
    output = await (await fetch('http://13.232.137.75:5000/api/products')).json()
    this.setState({ prod: output,fetched:true })
    console.log(this.state.prod)
  }
render()
{


  if(this.state.fetched)
  {
    return(
<div >
  <Container><Carousel loop enableAutoPlay={true} pagination={false} renderArrow={this.myArrow} breakPoints={this.breakPoints}>
{example.map(x=>(
    <div>
         <Card >
           <CardImg src={rice} />
           <CardBody>
           <CardText>
               {x}
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
else
{
  return(
  <div>

  </div>
  )
}
}

 }
 export default products;

  
  
