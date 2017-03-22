import React from 'react';
import {Jumbotron, Panel } from 'react-bootstrap'

const logo = "./assets/logo.jpg";
const cert = "./assets/certificate.jpg"

const Next = () => (
  <div>
    <Jumbotron>
      <div>
      <p className="smallhd">Next Steps</p>
      </div>
    </Jumbotron>
      <div className='prosandcons'>

        <div className='sub1'>
          <Panel>1. Execute non-disclosure agreement</Panel>
          <Panel>2. Have product or process evaluated</Panel>
          <Panel>3. Develop cost model to determine competitive potential</Panel>
          <Panel>4. Initiate Production Prototype run to verify cost savings</Panel>
          <Panel>5. Define transportation requirements as part of the financial evaluation</Panel>
          <Panel>6. Provide profitability analysis relative to:
          <ul>
              <li>Manual Operations - Direct Labor</li>
              {/*<ul>
                <li>Improved Profitability</li>
              </ul>*/}
              <li>Automation</li>
              <ul>
                <li>Volume Based</li>
                <li>Capital Investment Required</li>
                <li>Maximize Profitability</li>
              </ul>
            </ul>
          </Panel>

        </div>

        <div className='sub1 images'>
          <img src={logo} />
          <img src={cert} />
        </div>

        <br />
      </div>
  </div>
);

module.exports = Next;