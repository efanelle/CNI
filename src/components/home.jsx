import React from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron, Button, Well } from 'react-bootstrap'

const customer = '../assets/customer2.png'
const time = '../assets/time.png'


const Home = () => (
  <div>
    <Jumbotron className="home">
      <h1>USA Nearshoring Management</h1>
      <h2>The China Alternative</h2>
      <p>Bring your production back to the USA using competitive labor alternatives.  
      Let us show you how.</p>
    </Jumbotron>

    <div className="mainInfo">
      <Well className="odd">Going to China for labor intensive operations can be cost effective but reduce your ability
      to serve your customer in a timely manner</Well>
      <img className="icon" src={customer}></img>
      <Well className="even">Being closer to your customer can provide you the opportunity to be more responsive
      than your competition</Well>
      <img className="icon" src={time}></img>
      <Well className="odd">Being closer to your market, reducing your lead time, and being able to react quickly to real 
      demand can help you reduce excess inventory and develop a real time delivery model</Well>      
    </div>
  </div>
);

module.exports = Home;