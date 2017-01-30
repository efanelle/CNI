import React from 'react'
import {Jumbotron, PageHeader, Panel, Accordion, Well} from 'react-bootstrap'

const CNI = () => (
  <div>
    <PageHeader>Why choose CNI?</PageHeader>
      <h2 className="center">Opportunity Knocks</h2>
          <Panel className="odd">CNI offers a turnkey solution to labor intensive or simple assembly
          operations in the Caribbean (Nearshoring)</Panel>
          <Panel>The key to successful Caribbean Operations is talented, trained,
          experienced personnel and management</Panel>
          <Panel className="odd">Having a proven logistics model is key to bridging the lead time gap</Panel>
          <Panel>Managing the relationship becomes routine because of CNI's ability
          to manage your domestic requirements effectively</Panel>
      <h2 className="center">CNI Abilities</h2>
        <Panel bsStyle= "primary" header="Cost Reduction Opportunities" eventKey="1">
          <ul>
            <li>Simple assembly operations</li>
            <li>Labor intensive operations</li>
            <li>Possible automation</li>
          </ul>
        </Panel>
        <Panel bsStyle= "primary" header="Lead Time Reduction" eventKey="2">
          <ul>
            <li>Customer Responsiveness</li>
            <li>Reduction of excess inventory</li>
            <li>Additional revenue producing opportunities</li>
          </ul>
        </Panel>
        <Panel bsStyle= "primary" header="Logistics Capabilities" eventKey="3">
          <ul>
            <li>Transportation relationships</li>
            <li>Shipment scheduling</li>
            <li>Vessel and delivery coordination</li>
          </ul>
        </Panel>
  </div>
);

module.exports = CNI;
