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
    console.log(button)
    this.setState({page: button})
  }

  render(){
    if(this.state.page === 'home') {        
      return(
        <div className='home'>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <div className="main">
            <Jumbo />
            <PicCarousel />
          </div>
        </div>
      );
    } else if(this.state.page === 'about') {
      return(
        <div className='home'>
        <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <h1> This will be filled with information about us!</h1>
        </div>
      );
    } else if(this.state.page === 'services') {
      return(
        <div className='home'>
        <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <h1> This will be filled with information about our services!</h1>
        </div>
      );
    } else if(this.state.page === 'contact') {
      return(
        <div className='home'>
        <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <h1> This will be filled with information about how to contact us!</h1>
        </div>
      );
    } 
  }
}

module.exports = App;