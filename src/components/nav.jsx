import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyTheme from '../theme/theme.js'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Nav, NavItem} from 'react-bootstrap'



function handleTouchTap() {
  console.log('onTouchTap triggered on the title component');
}

function handleSelect(selectedKey) {
  return selectedKey;
}


class Navi extends React.Component {
    constructor(props){
    super(props);
    console.log(props.nav);
  }

  childOnClick(button) {
    this.props.onClick.bind(null, button)
    console.log(this.props)
  }

    
  render(){    
    return (    
      <Nav bsStyle="pills" activeKey={'home'} onSelect={handleSelect}>
            <NavItem eventKey={'home'} href="/home">CNI</NavItem>
            <NavItem eventKey={'about'} href ="#about" onClick={this.props.onClick.bind(null, 'about')} title="about">About Us</NavItem>
            <NavItem eventKey={'services'} onClick={this.childOnClick.bind(this)} title="services">Services</NavItem>
            <NavItem eventKey={'contact'} title="contact">Contact Us</NavItem>
          </Nav>
    )
  }
}



module.exports = Navi;
