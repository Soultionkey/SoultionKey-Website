import React, { Component } from 'react';
import Footer from './Footer';
import Spinner from './Spinner';
import './WebServices.css';
import Form from './FormContent';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import playIcon from '../../img/videoPlay.gif';
import DatePicker from "react-datepicker";
import ModalVideo from 'react-modal-video';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import axios from 'axios';

class Webservices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCardData: [],
            secondeCardData: [],
            thirdCardData: [],
            fourthCardData: [],
            loading: false,
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
    componentDidMount() {
        let firstCard = "http://localhost/wordpress/wp-json/wp/v2/posts/27";
        fetch(firstCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    firstCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });
        let secondeCard = "http://localhost/wordpress/wp-json/wp/v2/posts/68";
        fetch(secondeCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    secondeCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        let thirdCard = "http://localhost/wordpress/wp-json/wp/v2/posts/94";
        fetch(thirdCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    thirdCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        let fourthCard = "http://localhost/wordpress/wp-json/wp/v2/posts/96";
        fetch(fourthCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    fourthCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        setTimeout(() => {
            this.setState({ loading: true })
        }, 2000)
    }

    render() {
        let Card1 = this.state.firstCardData;
        let Card2 = this.state.secondeCardData;
        let Card3 = this.state.thirdCardData;
        let Card4 = this.state.fourthCardData;


        return (
            <div>
                {/* <div className="web-pricing-container">
                    <div className="container-text">
                        <h4>Services</h4>
                        <h6>Soultion Key > <span className="container-span-text">Web Development </span></h6>
                    </div>
                </div> */}
                <div id="main-content">
                <div className="div-test"></div>
                    <div id="bg-web-hero" >
                    <div >
                      <pre className="overlay-div">{`
 We design & develop custom websites based
 upon proven digital marketing 
 strategies .
          `}</pre>
          
                    </div>
                    <Button  style={{  backgroundColor: 'gray' }} className="web-bg-button" onClick={this.toggle}><span className="web-bg-button-text ">Schedule a Free Consultation</span></Button>
                      <img src={playIcon}
                                alt="animated"
                                className="web-playIcon "
                                onClick={this.openModal}
                            />
                    </div>
                    <div className="web-home-serperator">
                        <div className="web-home-section">
                            <h1 className="pricing-text"><strong><br /><br />Web Services Pricing </strong></h1>
                            <hr className="web-spirating-line" />
                            {!this.state.loading ?
                                <Spinner />
                                :

                                <div className="web-pricing-row">
                                    <div className="web-pricing-column">
                                        <div className="web-pricing-card " style={{ backgroundColor: '#CD7F32' }}>
                                            <h3>BRONZE<br /><span>$1000</span> </h3><hr />
                                            <p dangerouslySetInnerHTML={{ __html: Card1 }} ></p>
                                        </div>
                                    </div>

                                    <div className="web-pricing-column ">
                                        <div className="web-pricing-card " style={{ backgroundColor: 'silver' }}>
                                            <h3>SILVER<br /><span>$2500</span></h3><hr />
                                            <p dangerouslySetInnerHTML={{ __html: Card2 }} ></p>
                                        </div>
                                    </div>

                                    <div className="web-pricing-column">
                                        <div className="web-pricing-card" style={{ backgroundColor: 'goldenrod' }}>
                                            <h3>GOLD<br /><span>$8,000</span></h3><hr />
                                            <p dangerouslySetInnerHTML={{ __html: Card3 }} ></p>
                                        </div>
                                    </div>

                                    <div className="web-pricing-column">
                                        <div className="web-pricing-card" style={{ backgroundColor: '#E5E4E2' }}>
                                            <h3>PLATINUM<br /><span>$25,000+</span></h3><hr />
                                            <p dangerouslySetInnerHTML={{ __html: Card4 }} ></p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div id="main-footer">
                        <br />
                            <p className= "contact-text ">Contact Us</p>
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
        
export default Webservices;