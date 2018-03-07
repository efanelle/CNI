import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyTheme from '../theme/theme.js'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap'

function handleTouchTap() {
  console.log('onTouchTap triggered on the title component');
}

function handleSelect(selectedKey) {
  return selectedKey;
}
var selected;
class Navi extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      tab: 'home'
    }
  }
  componentWillMount() {
    selected = localStorage.getItem('selected') || 'home';
  }
  onClick(e) {
    let tab = e.currentTarget.title;
    this.setState({'tab': tab})
  }

  render(){
    var currentPath = location.pathname.split('').slice(1).join('');
    if(currentPath === '') {
      currentPath = 'home'
    }

    return (   
      <div className='navbar'>
        <Nav bsStyle="tabs" activeKey={currentPath} onSelect={handleSelect}>
          <NavItem eventKey={'home'} title="" onClick={this.props.onClick.bind(this)}><Link to='/'>UNM</Link></NavItem>
          <NavDropdown eventKey={"options"} title="Labor Options" id="nav-dropdown">
            <MenuItem eventKey={"offshore"} onClick={this.onClick.bind(this)} title="offshore" className='drpdwn'><Link to='/offshore'>Offshoring</Link></MenuItem>
            <MenuItem eventKey={"reshore"} onClick={this.onClick.bind(this)} title="reshore" className='drpdwn'><Link to='/reshore'>Reshoring</Link></MenuItem>
          </NavDropdown>
          <NavItem eventKey={"nearshore"} onClick={this.onClick.bind(this)} title="nearshore"><Link to='/nearshore'>Nearshoring Option</Link></NavItem>        
          <NavItem eventKey={"usa"} onClick={this.onClick.bind(this)} title="usa"><Link to='/usa'>Why Nearshoring?</Link></NavItem>                  
          <NavItem eventKey={"services"} onClick={this.onClick.bind(this)} title="services"><Link to='/services'>Services</Link></NavItem>
          <NavItem eventKey={'next'} onClick={this.onClick.bind(this)} title="next"><Link to='/next'>Next Steps</Link></NavItem>
          <NavItem eventKey={'about'} onClick={this.onClick.bind(this)} title="about"><Link to='/about'>About Us</Link></NavItem>
        </Nav>
      </div>
    )
  }
}



module.exports = Navi;


{/*<NavItem eventKey={'home'} href="/home" onClick={this.childOnClick.bind(this)} title='home'>UNM</NavItem>
          <NavDropdown eventKey="options" title="Labor Options" id="nav-dropdown">
            <MenuItem eventKey="offshore" onClick={this.childOnClick.bind(this)} title="offshore">Offshoring</MenuItem>
            <MenuItem eventKey="reshore" onClick={this.childOnClick.bind(this)} title="reshore">Reshoring</MenuItem>
          </NavDropdown>
          <NavItem eventKey={'nearshore'} onClick={this.childOnClick.bind(this)} title="nearshore">Nearshoring Option</NavItem>        
          <NavItem eventKey={'usa'} onClick={this.childOnClick.bind(this)} title="usa">Why Nearshoring?</NavItem>                  
          <NavItem eventKey={'services'} onClick={this.childOnClick.bind(this)} title="services">Services</NavItem>
          <NavItem eventKey={'next'} onClick={this.childOnClick.bind(this)} title="next">Next Steps</NavItem>
          <NavItem eventKey={'about'} onClick={this.childOnClick.bind(this)} title="about">About Us</NavItem>*/}