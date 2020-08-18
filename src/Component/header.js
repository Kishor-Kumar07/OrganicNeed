import React, { Component } from 'react';
import {Button} from 'reactstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider2 from '../Images/slider2.jpg'
import slider3 from '../Images/slider3.jpg'
import slider4 from '../Images/slider4.jpg'
import slider5 from '../Images/slider5.jpg'
class Header extends Component {
    render() {
        return (
            <Carousel infiniteLoop showStatus={false} showThumbs={false} autoPlay  renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)',position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 15px)',
                width: 30,
                height: 30,
                cursor: 'pointer', left: 15}}>
                  <i class="fa fa-angle-left  " aria-hidden="true" onClick={onClickHandler} title={label}  ></i>
                      </Button>
              )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)',position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 15px)',
                width: 30,
                height: 30,
                cursor: 'pointer', right: 15}}>
                      <i class="fa fa-angle-right" aria-hidden="true" onClick={onClickHandler} title={label} ></i>
                  </Button>
              )
          }>
                {/* <div>
                    <img src={slider1} />
                   
                </div> */}
                <div>
                <img src={slider2} />
                </div> 
                <div>
                <img src={slider3} />
                </div>
                <div>
                <img src={slider4} />
                </div>
                <div>
                <img src={slider5} />
                </div>
            </Carousel>
        );
    }
}

export default Header;