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

// const styles = {
//   h1: {
//     display: 'inline',
//   },
// };

const Navi = () => (
  // <MuiThemeProvider muiTheme= {getMuiTheme(MyTheme)}>
  //   <AppBar
  //     className= 'AppBar'
  //     title="Caribbean Nearshoring Initiative"
  //     onTouchTap={handleTouchTap}
  //   />
  // </MuiThemeProvider>


    <Nav bsStyle="pills" activeKey={handleSelect} onSelect={handleSelect}>
      <NavItem eventKey={1} href="/home">CNI</NavItem>
      <NavItem eventKey={2} title="Item">About Us</NavItem>
      <NavItem eventKey={3}>Contact Us</NavItem>
    </Nav>


)



module.exports = Navi;
