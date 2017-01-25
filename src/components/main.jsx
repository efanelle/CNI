import React from 'react'
import ReactDOM from 'react-dom'
import Navi from './nav.jsx'
import PicCarousel from './carousel.jsx'
import Jumbo from './jumbo.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home'
    };
  }
  onClick(button) {
    this.setState({page: button})
  }

  render(){
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <div className="main">
            <Jumbo />
            <PicCarousel />
          </div>
        </div>
      );
    }
}

        // <PicCarousel />
module.exports = App;