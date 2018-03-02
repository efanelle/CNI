import React from 'react';
import axios from 'axios';
import { Modal, Popover, Tooltip, Button, OverlayTrigger, PageHeader, Jumbotron, Panel } from 'react-bootstrap'

const $ = require('jquery');
const larry = '../assets/Larry.jpg'
const About = React.createClass({
  getInitialState() {
    console.log('test modal')
    return { showModal: false};
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  submit(e) {
    e.preventDefault()
    var data = {
      name: document.getElementById('VisitorName').value,
      emailAddress: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      text: document.getElementById('text').value
    }
    if(!data.name || !data.emailAddress) {
      alert('Please fill in required fields');
      return;
    }
    document.getElementById('VisitorName').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('text').value = ''

    axios.post('/users', data)
    // .then(function(res) {
    // })
    this.close();
  },

  render() {

    return (
      <div>
        <Jumbotron className='about'>
          <div>
          <Button bsSize="large" onClick={this.open}>
            Contact Us
          </Button>
          <p className="smallhd">About Us</p>
          </div>
        </Jumbotron>
        <div className='info'>
          <img className="larry" src={larry}></img>
          <h4>Larry Fanelle is a dynamic Supply Chain Executive with over 30 years experience managing manufacturing, logistics, and coordination of various
            fulfillment activities in the Caribbean.</h4>
          <h5><strong>Professional Background</strong></h5>
          <p><strong>K'NEX Brands - Chief Supply Chain Officer</strong></p>
          <p>K’NEX is a construction toy building system that consists of interlocking plastic rods, connectors, gears, wheels, and other components, 
          which can be pieced together to form a wide variety of models, machines, and architectural structures.</p>
          <p>Sorting parts manually, to specific “bills of material” is a very labor intensive operation.  K’NEX was unable to competitively use 
            domestic labor to perform this operation on the US mainland.  Taking advantage of lower Caribbean labor rates, close to the USA mainland, 
            enabled K’NEX to maximize domestic manufacturing capabilities.  This methodology significantly reduced lead time, assembly costs, and excess 
            inventory when compared to the China alternative. </p>

          <p><strong>eGames, Inc. - Vice President of Operations</strong></p>
          <p>eGames was a national software developer of family friendly PC games, serving the largest national retail chains in the United States.  
            Directed all Supply Chain Management functions while maintaining P&L responsibility.  Business sold direct as well as through distributors 
            and brokers using outside printing, replication, and fulfillment contractors to meet demand requirements.</p>

          <p><strong>Checkpoint Systems, Inc. - Vice President of Operations</strong></p>
          <p>Checkpoint Systems is a manufacturer of EAS (Electronic Article Surveillance) security equipment used by retailers and electronic tracking applications worldwide.  
            Responsible for managing multiple offshore manufacturing facilities and all facets of supply chain management.</p>
          <p>The electronic circuit boards used in the EAS system required labor intensive board stuffing in the absence of automation.  
            Another critical labor operation was the assembly and ultrasonic welding of security tags used as a detection device with the system.  
            At Checkpoint, we leveraged what was known as a twin plant concept, using the Dominican for labor intensive operations, 
            and assembly in Puerto Rico, to deliver a competitive alternative to China manufacturing. </p>
        </div>



        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Larry Fanelle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/*<div className="links">
              <h5>Phone</h5>
              <p>267-230-1673</p>
              <h5>Email</h5>
              <a href="mailto:lfanelle@gmail.com">lfanelle@gmail.com</a>
            </div>*/}

            <div className="links">
              <form>
                <label><span>*Name: </span></label>
                <input required type="text" id="VisitorName" name="VisitorName"/>
                <br />
                <br />
                <label><span>*Email Address: </span></label>
                <input required type="text" id="email" name="emailAddress"/>
                <br />
                <br />
                <label><span>Phone Number: </span></label>
                <input type="text" id="phone" name="phone"/>
                <br />
                <br />
                <label><span>Questions/Comments:</span></label>
                <br />
                <textarea type="text" id="text" name="text"/>
                <br />
                <br />                
                <h6>*Required field</h6>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.submit}> Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = About;
