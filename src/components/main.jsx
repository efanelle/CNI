import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
import Users from './users.jsx'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 'home',
      // showModal: false
    };
  }
  onClick(button) {
    this.setState({tab: button})
    // console.log('button', button)
  }

  render(){
    return (
      <Router>
        <div>
          <Navi nav={this.state} onClick={this.onClick.bind(this)}/>
          <Route exact path='/' component={Home} />
          <Route path='/offshore' component={Offshore} />
          <Route path='/reshore' component={Reshore} />
          <Route path='/nearshore' component={Nearshore} />
          <Route path='/usa' component={USA} />
          <Route path='/services' component={Services} />
          <Route path='/next' component={Next} />
          <Route path='/about' component={About} />
          <Route path='/secret' component={Users} />
        </div>
      </Router>
    )
  }
}

module.exports = App;