import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const Offshore = () => (
  <div>
    <Jumbotron className="offshore"> 
    <h2>Offshoring Option </h2>
    <p>The moving of various operations of a company
    to another country for reasons such as lower labor costs or more favorable economic
    conditions in that other country.</p>
    </Jumbotron>
    <div className = "prosandcons">
      <div className="sub">
        <h3>Advantages</h3>
        <ul>
          <li>Lower Labor Costs</li>
        </ul>
      </div>
      <div className="sub">
        <h3>Disadvantages</h3>
        <ul>
          <li>Excessive lead times</li>
          <li>Excessive transportation costs</li>
          <li>Unreliable transportation schedules</li>
          <li>Currency differentials</li>
          <li>Language barriers</li>
          <li>Time zone considerations</li>
          <li>Additional management costs</li>
            <ul>
              <li>International office</li>
              <li>Additional domestic resources</li>
            </ul>
          <li>Excess inventory associated with long lead times</li>
          <li>Opportunistic sales unachievable</li>
        </ul>
      </div>
    </div>
  </div>
);

module.exports = Offshore;
