import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

 
class DemoCarousel extends Component {
    render() {
        return (
               <div>
               <Carousel showArrows={true}>
                  <div>
                      <img src="./images/welcom.png" />
                      <p className="legend">Legend 1</p>
                  </div>
                  <div>
                      <img src="./images/agricul.png" />
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img src="./images/slide.png" />
                      <p className="legend">Legend 3</p>
                  </div>
              </Carousel>
            </div>
        );
     }
}
export default DemoCarousel;
