import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Button, Panel } from 'react-bootstrap';
import PicCarousel from './carousel.jsx';


const Services = () => (
  <div>
    <Jumbotron>
      <p className="smallhd">USA Nearshoring Management</p>
      <p><strong>Manpower</strong> is our resource, <em>management</em> is our strength</p>
    </Jumbotron>
    <div className="panels-ctr">
      <Panel header="Cost Reduction Opportunities" eventKey="1" className="panel-flex">
        <ul>
          <li>Simple assembly operations</li>
          <li>Labor intensive operations</li>
          <li>Possible automation</li>
        </ul>
      </Panel>
      <Panel header="Lead Time Reduction" eventKey="2" className="panel-flex">
        <ul>
          <li>Customer Responsiveness</li>
          <li>Reduction of excess inventory</li>
          <li>Additional revenue producing opportunities</li>
        </ul>
      </Panel>
      <Panel header="Logistics Capabilities" eventKey="3" className="panel-flex">
        <ul>
          <li>Transportation relationships</li>
          <li>Shipment scheduling</li>
          <li>Vessel and delivery coordination</li>
        </ul>
      </Panel>
    </div>
    <PicCarousel />
  </div>
);

module.exports = Services;