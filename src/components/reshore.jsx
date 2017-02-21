import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const Reshore = () => (
  <div>
    <Jumbotron className="reshore"> 
    <p id="header">Reshoring Option </p>
    <p>Reshoring, which is also known as 'onshoring', 'inshoring', and 'backshoring' is the act
    of reintroducing domestic manufacturing to a country.  It is the reverse process of offshoring,
    where manufacturing is moved to another country where labor is cheaper.</p>
    </Jumbotron>
    <div className = "prosandcons">
      <div className="sub">
        <h3>Advantages</h3>
        <ul>
          <li>Shorter lead times</li>
          <li>Opportunistic sales achievable</li>
          <li>"Just In Time" supply chain</li>
          <li>Minimize exposure to excess inventory</li>
          <li>Reduced transportation costs</li>
        </ul>
      </div>
      <div className="sub">
        <h3>Disadvantages</h3>
        <ul>
          <li>Noncompetitive labor rates</li>
          <li>Capital Expenditures associated with automation to minimize labor expense</li>
          <li>Economies of scale (production runs) required to offset labor costs</li>
          <li>Available labor resources</li>
          <li>Business seasonality requirements</li>
        </ul>
      </div>
    </div>
  </div>
);

module.exports = Reshore;
