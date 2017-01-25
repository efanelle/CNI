import React from 'react'
import ReactDOM from 'react-dom'
import { Carousel, onChange, onClickItem, onClickThumb } from 'react-responsive-carousel'

const pic1 = "./assets/DR1.jpg";
const pic2 = "./assets/DR2.jpg"

// class PicCarousel extends React.Component {
const PicCarousel = () => (

  <Carousel showArrows={true} 
            onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} autoPlay={true}>
      <div>
          <img src={pic1} />
          <p className="legend">Legend 1</p>
      </div>
      <div>
          <img src={pic2} />
          <p className="legend">Legend 2</p>
      </div>
  </Carousel>
)

module.exports = PicCarousel