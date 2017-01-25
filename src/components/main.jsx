import React from 'react'
import ReactDOM from 'react-dom'
import Navi from './nav.jsx'
import PicCarousel from './carousel.jsx'
import Jumbo from './jumbo.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
  // //   this.state = {
  // //     videos: [],
  // //     currVid: window.exampleVideoData[0]
  // //   };
  }

  render(){
    return(
      <div>
        <Navi />
        <Jumbo />
      </div>
    );
  }
}

        // <PicCarousel />
module.exports = App;