import React from 'react'
import ReactDOM from 'react-dom'
import { Carousel, onChange, onClickItem, onClickThumb } from 'react-bootstrap'

const pic1 = "./assets/DR1.jpg";
const pic2 = "./assets/DR2.jpg";
const pic3 = "./assets/DR3.jpg";
const pic4 = "./assets/DR4.jpg";
const pic5 = "./assets/DR5.jpg";
const pic6 = "./assets/DR6.jpg";
const pic7 = "./assets/DR7.jpg";
const pic8 = "./assets/DR8.jpg";
const pic9 = "./assets/DR9.jpg";

// class PicCarousel extends React.Component {
const PicCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className="carouselPic" width={1000} height={500} alt="900x500" src={pic6}/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic3}/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic1}/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic7}/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic2}/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic4}/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic5}/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic8}/>
    </Carousel.Item> 
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic9}/>
    </Carousel.Item>     
  </Carousel>
)
      // <Carousel.Caption>
      //   <h3>Second slide label</h3>
      //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      // </Carousel.Caption>
module.exports = PicCarousel