import React from 'react'
import ReactDOM from 'react-dom'
import Navi from './nav.jsx'
import PicCarousel from './carousel.jsx'
import Home from './home.jsx'
import Offshore from './offshore.jsx'
import Reshore from './reshore.jsx'
import Nearshore from './nearshore.jsx'
import Services from './services.jsx'
import CNI from './whyCNI.jsx'



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
    } else if(this.state.page === 'cni') {
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <CNI />
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
    } else if(this.state.page === 'contact') {
      return(
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <h1> This will be filled with information about how to contact us!</h1>
        </div>
      );
    } 
  }
}

module.exports = App;