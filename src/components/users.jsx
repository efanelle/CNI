import React from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron, Button, Well } from 'react-bootstrap'
import axios from 'axios'


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    // this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
  }
  
//   loadCommentsFromServer() {
//     axios.get('/users')
//     .then(res => {
//       console.log(res.data)
//     this.setState({ data: res.data });
//   })
//  }

  componentWillMount() {
    var self = this;
    axios('/users')
    .then(function(resp) {
      var data = resp.data;
      self.setState({'users': data.users})
    })
  }

  render() {
    var display = this.state.users.map(function(user){
      return <div className="users">
          <h5>{user.name}</h5>
          <h6>{user.emailAddress}</h6>
          <h6>{user.phone}</h6>
          <h6>{user.text}</h6>
        </div>
    })
    console.log(display)
    return (
    <div className="userDisplay">
    <h2>Users:</h2>
      {display}
    </div>
    )
  }
}

module.exports = Users;