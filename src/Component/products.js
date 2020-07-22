import React, { Component } from 'react';
import HorizontalGallery from 'react-dynamic-carousel'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card,CardBody, CardText, CardImg } from 'reactstrap';
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6 // optional, default to 1.
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


 class products extends Component{
constructor(props){
  super(props)
  this.state={
    prod:[],
    fetched:false
  }
}
  async componentDidMount() {
    var output;
    output = await (await fetch('http://13.232.137.75:5000/api/products')).json()
    this.setState({ prod: output,fetched:true })
    console.log(this.state.prod[0])
  }
render()
{
  if(this.state.fetched)
  {
    return(
<div >
<Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={10}
  containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{example.map(x=>(
    <div>
         <Card >
           <CardImg src={this.state.prod[0].image} height='100px' />
           <CardBody>
           <CardText>
               {this.state.prod[0].price}
           </CardText>
           </CardBody>
           </Card>    
    </div>
))}
</Carousel>
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