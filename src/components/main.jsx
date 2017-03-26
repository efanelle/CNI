import React from 'react'
import ReactDOM from 'react-dom'
import Navi from './nav.jsx'
import PicCarousel from './carousel.jsx'
import Home from './home.jsx'
import Offshore from './offshore.jsx'
import Reshore from './reshore.jsx'
import Nearshore from './nearshore.jsx'
import Services from './services.jsx'
import USA from './usa.jsx'
import About from './about.jsx'
import Next from './nextsteps.jsx'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home',
      showModal: false
    };
  }
  onClick(button) {
    this.setState({page: button})
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }

  render(){
    if(this.state.page === 'home') {        
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
            <Home />
        </div>
      );
    } else if(this.state.page === 'offshore') {
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <Offshore />
        </div>
      );
    } else if(this.state.page === 'reshore') {
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <Reshore />
        </div>
      );
    } else if(this.state.page === 'nearshore') {
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <Nearshore />
        </div>
      );
    } else if(this.state.page === 'usa') {
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <USA />
        </div>
      );
    } else if(this.state.page === 'services') {
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <Services />
          <PicCarousel />
        </div>
      );
    } else if(this.state.page === 'about') {
      return(
        <div>
          <Navi open={this.open.bind(this)} nav={this.state} onClick={this.onClick.bind(this)}/>
          <About />
        </div>
      );
    } else if(this.state.page === 'next') {
      return(
        <div>
          <Navi open={this.open.bind(this)} nav={this.state} onClick={this.onClick.bind(this)}/>
          <Next />
        </div>
      );
    } 
  }
}

module.exports = App;