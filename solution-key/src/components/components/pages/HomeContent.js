import React, { Component } from 'react';
import './HomeContent.css';
import playIcon from '../../img/playbtn.png';
import ModalVideo from 'react-modal-video';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { FaMobileAlt } from '../../../node_modules/react-icons/fa';
import { FaDesktop } from '../../../node_modules/react-icons/fa';
import { FaSistrix } from '../../../node_modules/react-icons/fa';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from 'axios';
import roundi from '../../img/mobileIcon.gif';
import roundweb from '../../img/LaptopSmall-Icon-Size.gif';
import roundDigital from '../../img/Digital-Marketing_Small_Icon.gif';
import './scrolledFooter.css';
import Form from './FormContent';
import "react-datepicker/dist/react-datepicker.css";
class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            modal: false,
            startDate: new Date(),
            name: '',
            time: '',
            phone: '',
            email: '',
            message: 'Your consultation has been received , we will contact you soon ! '
        }
        this.openModal = this.openModal.bind(this)
        this.toggle = this.toggle.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    openModal() {
        this.setState({ isOpen: true })
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        // if(dataState){
        // this.handleSubmit()
        // }
        this.handleSubmit()
    }
    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }
    handelChange = e => {

        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {

        axios.all([this.messagToTheOWner(), this.messagToTheCustomer()])
            .then(axios.spread(function (acct, perms) {
                // Both requests are now complete
            }));
    }
    messagToTheOWner() {
        const { name, email, time, phone, startDate, message } = this.state;
        return axios.post('/api/callForm', {
            name,
            email,
            time,
            phone,
            startDate,
            message
        }
        )
    }

    messagToTheCustomer() {
        const { name, email, message } = this.state;
        return axios.post('/api/callReplay', {
            name,
            email,
            message
        }
        )
    }


    render() {
        return (
            <div>
                <div id="main-content">
                    <div >
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} width="100px" hight="100px" />
                        <div id="bg-body" >
                            <div>

                                <pre className="bg-text" >{`
Whether it be custom website development, mobile 
applications, or digital marketing and SEO,we put   
our soul into finding the keys to your solution.
          `}</pre>
                                <Button color="outline-info" style={{ border: '2px solid #79ddff', backgroundColor: '#fff' }} className="bg-button" onClick={this.toggle}><span className="bg-button-text ">Schedule a Consultation</span></Button>
                            </div>
                            <img src={playIcon}
                                alt="animated"
                                className="playIcon "
                                onClick={this.openModal}
                            />
                        </div>
                        <div className="home-serperator">
                            <div className="home-section">
                                <div className="rowHome">
                                    <div className="home-column round-button-web">
                                        <div className="home-card ">

                                        </div>
                                        <div className="round-services-text">
                                            <h5>Desktop Design</h5>
                                            <h6>the Desktop div section</h6>
                                        </div>
                                    </div>

                                    <div className="home-column">
                                        <div className="home-card " ><img src={roundi} style={{width:'90px'}}   />

                                        </div>
                                        <div className="round-services-text">
                                            <h5>Mobile App</h5>
                                            <h6>the mobile div section</h6>
                                        </div>
                                    </div>

                                    <div className="home-column">
                                        <div className="home-card  round-button-digital" >
                                        </div>
                                        <div className="round-services-text">
                                            <h5>SEO</h5>
                                            <h6>the SEO div section</h6>
                                        </div>
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
                                                <AvField
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    placeholder="Email"
                                                    onChange={this.handelChange} />
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
                                                    <DatePicker
                                                        className="date-picker"
                                                        selected={this.state.startDate}
                                                        onChange={this.handleDateChange}
                                                    />
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
                                <Button color="info" onClick={this.toggle}>Submit</Button>
                            </ModalFooter>
                        </Modal>
                        <div id="main-footer">
                        <br />
                            <p className= "contact-text ">Contact Us</p>
                            <Form />
                            <p className="footer-data"><hr />Soultion key ©2019</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default HomeContent;
