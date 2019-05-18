import React, { Component } from 'react';
import Cards from './Cards';
import './Blog.css';
import Form from './FormContent';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import playIcon from '../../img/videoPlay.gif';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import DatePicker from "react-datepicker";
import ModalVideo from 'react-modal-video';
import axios from 'axios';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
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
            <div >
                <div id="main-content">
                    <div >
                    <div className="div-test"></div>
                        <div id="bg-blog-hero" >
                        <div >
                      <pre className="blog-overlay-div">{`
 We design & develop custom websites 
 upon proven digital marketing 
 strategies .
          `}</pre>
                    </div>
                    <Button  style={{  backgroundColor: 'gray' }} className="blog-bg-button" onClick={this.toggle}><span className="blog-bg-button-text ">Schedule a Free Consultation</span></Button>
                      <img src={playIcon}
                                alt="animated"
                                className="blog-playIcon "
                                onClick={this.openModal}
                            />
                    
                    </div>
                        <div className="blog-home-serperator">
                            <div className="blog-home-section">
                                <div className="blog-rowHome">
                                    <div className="blog-home-column">
                                        <div>
                                            <Cards />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="main-footer">
                        <Form />
                        <p className="footer-data"><hr />Soultion key ©2019</p>
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
            </div>

        );
    }
}

export default Blog;