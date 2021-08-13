import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'Images/s7.jpg',
  'Images/s6.jpg',
  'Images/s5.jpg',
  'Images/tent1.jpg',
  'Images/s3.jpg',
  'Images/s2.jpg',
  'Images/s1.jpg'
];
const properties = {
    duration: 1000,
    transitionDuration:1000,
    infinite: true,
    indicators: true,
    arrows: true
  }
const Slideshow = () => {
    return (
     
      <div className="w3-center w3-section w3-content w3-container w3-padding">
        <Slide{...properties}>
          <div className="each-slide ">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
          </div><div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
             
            </div>
          </div><div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
             
            </div>
          </div><div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>

            </div>
          </div>
        </Slide>
      </div>
      
    )
};

export default Slideshow;