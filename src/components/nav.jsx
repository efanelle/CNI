import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyTheme from '../theme/theme.js'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Nav, NavItem, Navbar} from 'react-bootstrap'



function handleTouchTap() {
  console.log('onTouchTap triggered on the title component');
}

function handleSelect(selectedKey) {
  return selectedKey;
}


class Navi extends React.Component {
    constructor(props){
    super(props);
  }

  childOnClick(e) {
    var page = e.currentTarget.title
    this.props.onClick.call(null, page)
  }
// {this.props.onClick.bind(null, 'about')
    
  render(){    
    return (   
      <div className='navbar'>
        <Nav bsStyle="tabs" activeKey={'home'} onSelect={handleSelect}>
          <NavItem eventKey={'home'} href="/home" onClick={this.childOnClick.bind(this)} title='home'>CNI</NavItem>
          <NavItem eventKey={'offshore'} onClick={this.childOnClick.bind(this)} title="offshore">Offshoring Option</NavItem>
          <NavItem eventKey={'reshore'} onClick={this.childOnClick.bind(this)} title="reshore">Reshoring Option</NavItem>
          <NavItem eventKey={'nearshore'} onClick={this.childOnClick.bind(this)} title="nearshore">Nearshoring Option</NavItem>        
          <NavItem eventKey={'usa'} onClick={this.childOnClick.bind(this)} title="cni">Why CNI?</NavItem>                  
          <NavItem eventKey={'services'} onClick={this.childOnClick.bind(this)} title="services">Services</NavItem>
          <NavItem eventKey={'about'} onClick={this.childOnClick.bind(this)} title="about">About Us</NavItem>
        </Nav>
      </div>
    )
  }
}



module.exports = Navi;
