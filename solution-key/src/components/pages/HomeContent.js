import React, { Component } from 'react';
import './HomeContent.css';
import playIcon from '../../img/playIcon.png';
import ModalVideo from 'react-modal-video';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { FaMobileAlt } from '../../../node_modules/react-icons/fa';
import { FaDesktop } from '../../../node_modules/react-icons/fa';
import { FaSistrix } from '../../../node_modules/react-icons/fa';
import { Link } from "react-router-dom";

class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            modal: false
        }
        this.openModal = this.openModal.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div >
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />
                <div id="bg-body" >
                    <div>

                        <pre className="bg-text" >{`
Whether it be custom website development, mobile 
applications, or digital marketing and SEO,we put   
our soul into finding the keys to your solution.
          `}</pre>
                        <Button color="outline-info" className="bg-button" onClick={this.toggle}><span className="bg-button-text ">Schedule a consultation</span></Button>
                    </div>
                    <img src={playIcon}
                        alt="animated"
                        className="playIcon "
                        onClick={this.openModal}
                    />
                </div>
                <div className="home-serperator">
                    <div className="home-section">
                        <div className="service-pricing-column ">
                            <div className="service-pricing-card" >
                                <Link to="/mobile" style={{ color: 'black' }} className="round-button"><FaMobileAlt /></Link >
                                <h5>Mobile App</h5>
                                <p>the mobile div section</p>
                            </div>
                        </div>

                        <div className="service-pricing-column">
                            <div className="service-pricing-card" >
                                <Link to="/services" style={{ color: 'black' }} className="round-button"><FaDesktop /></Link >
                                <h5>Desktop Design</h5>
                                <p>the Desktop div section</p>
                            </div>
                        </div>

                        <div className="service-pricing-column">
                            <div className="service-pricing-card" >
                                <Link to="/digital" style={{ color: 'black' }} className="round-button"><FaSistrix /></Link >
                                <h5>SEO</h5>
                                <p>the SEO div section</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Schedule a consultation !</ModalHeader>
                    <ModalBody>
                        <AvForm onValidSubmit={this.toggle} className="Container"  >
                            <Row >
                                <Row className="show-grid">
                                    <Col xs="10" sm="10">
                                        <AvGroup>
                                            <AvInput
                                                name="name"
                                                id="name"
                                                required
                                                placeholder="Name"
                                                onChange={this.handelChange} />
                                            <AvFeedback>The Name is Required !</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                    <Col xs="10" sm="10">
                                        <AvGroup>
                                            <AvInput
                                                name="phone"
                                                id="phone"
                                                required
                                                placeholder="PhoneNumber"
                                                type="text"
                                                pattern="\d{13}"
                                                onChange={this.handelChange} />
                                            <AvFeedback>You Should put a valid PhoneNumber !</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                    <Col xs="10" sm="6">
                                        <AvGroup>
                                            <AvInput
                                                type="date"
                                                name="date"
                                                id="exampleDate"
                                                placeholder="date placeholder"
                                                onChange={this.handelChange} />
                                            <AvFeedback>You Should put a valid PhoneNumber !</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                    <Col xs="10" sm="4">
                                        <AvGroup>
                                            <AvInput
                                                type="time"
                                                name="time"
                                                id="exampleTime"
                                                placeholder="time placeholder"
                                                onChange={this.handelChange} />
                                            <AvFeedback>You Should put a valid PhoneNumber !</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                </Row>
                            </Row>
                        </AvForm>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default HomeContent;
