import React from 'react';
import {Jumbotron, Panel, Modal, Popover, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'

const logo = "./assets/logo.jpg";
const cert = "./assets/certificate.jpg"

class Next extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      img: ''
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open(e) {
    console.log(e.currentTarget.title);
    this.setState({ showModal: true, img: e.currentTarget.title });
    console.log(this.state)
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <Modal bsSize = 'large' show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className='modalpic' src={ `./assets/${this.state.img}.jpg` } />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>

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
                <img title="logo" onClick= {this.open.bind(this)} src={logo} />
                <img title="certificate" onClick= {this.open.bind(this)} src={cert} />
              </div>

              <br />
            </div>
        </div>
      </div>
    )
  }
}


module.exports = Next;