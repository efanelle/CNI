import React from 'react'
import ReactDOM from 'react-dom'
import { Carousel, onChange, onClickItem, onClickThumb } from 'react-bootstrap'

const pic1 = "./assets/DR1.jpg";
const pic2 = "./assets/DR2.jpg"

// class PicCarousel extends React.Component {
const PicCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic1}/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={pic2}/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

module.exports = PicCarousel