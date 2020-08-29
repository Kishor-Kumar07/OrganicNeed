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
            <Carousel infiniteLoop showStatus={false} showThumbs={false} autoPlay >
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