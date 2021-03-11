import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


let styles = {
  margin: 'auto',
  width: '500px'
};

/* 
Use the react-responsive-carousel package to create the Carousel: 
https://www.npmjs.com/package/react-responsive-carousel


*/

const Carsl = () => {
  return (
    <div style={styles}>
      Welcome to the Carousel
      <Carousel>
        <div>
          <img alt="Hong Kong" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
        </div>
        <div>
          <img alt="Singapore" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
        </div>
        <div>
          <img alt="Japan" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
        </div>
        <div>
          <img alt="Las Vegas" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" />
        </div>
      </Carousel>
    </div>
  )
}
export default Carsl;