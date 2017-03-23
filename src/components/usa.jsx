import React from 'react'
import {Jumbotron, PageHeader, Panel, Accordion, Well} from 'react-bootstrap'

const USA = () => (
  <div>
    <Jumbotron>
    <p className="smallhd">Why choose USA Nearshoring Management?</p>
    <p>     </p>
    </Jumbotron>
    <Panel header="Market Trends" eventKey="1">
      <p>At USA Nearshoring Management, we support the "Made in the USA" initiatives.  Click on the links below to learn more about Nearshoring and it's benefits.</p>
      <ul className="links">
        <li><a target="blank" href="http://www.virgocapital.com/the-emergence-of-nearshoring/">Emergence of Nearshoring</a></li>
        <li><a target="blank" href="http://mhlnews.com/global-supply-chain/why-nearshoring-better-option-north-american-companies">Nearshoring as a Better Option</a></li>
        <li><a target="blank" href="http://blogs.wsj.com/experts/2014/06/04/why-nearshoring-is-replacing-outsourcing/">Why Nearshoring is Replacing Outsourcing</a></li>  
        <li><a target="blank" href="http://www.logisticsbureau.com/is-nearshoring-the-solution-to-rising-transportation-costs/">Nearshoring as a solution to transportation costs</a></li>                 
      </ul>
    </Panel>
      <div className="list">
        <div className = "opportunity">
          <p>At USA Nearshoring Management, we offer a turnkey solution to labor intensive or simple assembly
          operations in the Caribbean (Nearshoring). Our talented, trained, experienced personnel and management provide a proven logistics model, 
          which is key to bridging the lead time gap. Managing the relationship becomes routine because of UNM's ability to manage your domestic requirements 
          effectively.  </p>
        </div>
      </div>
  </div>
);

module.exports = USA;
