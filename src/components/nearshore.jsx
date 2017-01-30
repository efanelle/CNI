import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const Nearshore = () => (
  <div>
    <Jumbotron className="nearshore"> 
    <h2>Nearshoring Option </h2>
    <p>The transfer of business processes to companies in a nearby country, where both parties
    expect to benefit from one of more of the following dimensions in proximity: geographic,
    temporal (time zone), cultural, linguistic, economic, political, or historial linkages.</p>
    </Jumbotron>
    <div className = "prosandcons">
      <div className="sub">
        <h3>Advantages</h3>
        <ul>
          <li>Competitive labor rates</li>
          <li>Reduced lead time</li>
          <li>Reduced transportation costs</li>
          <li>Experienced labor pool</li>
          <li>Experienced management team</li>
          <li>Shorter supply chain</li>
          <li>No language barriers</li>
          <li>No time zone concerns</li>
          <li>Opportunistic sales now acheivable</li>
          <li>Established transportation model</li>
          <li>Assembly and manufacturing in a "free trade" zone</li>        
          <li>Improved profitability</li>                  
        </ul>
      </div>
      <div className="sub">
        <h3>Disadvantages</h3>
        <ul>
          <li>...</li>
        </ul>
      </div>
    </div>
  </div>
);

module.exports = Nearshore;
