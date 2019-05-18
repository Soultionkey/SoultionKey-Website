import React from 'react';
import { Button, Row, Col, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import axios from 'axios';
import './FormContent.css';
class FormContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      name: '',
      email: '',
      phone: '',
      service: '',
      hearAboutUS: '',
      message: '',
      modal: false
    };
  }
  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.handleSubmit()
  }
  async handleSubmit(e) {
    const { name, email, phone, service, hearAboutUS, message } = this.state;
    const form = await axios.post('/api/form', {
      name,
      email,
      phone,
      service,
      hearAboutUS,
      message
    })

  }

  render() {
    return (
      <div className="container">
        <AvForm onValidSubmit={this.toggle} className="Container"  >
          <Row >
            <Col xs="10" sm="5">
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
            <Col xs="10" sm="5">

              <AvField
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                onChange={this.handelChange} />
            </Col>
            <Col xs="10" sm="5">
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
            <Col xs="10" sm="5">
              <AvField
                type="select"
                name="service"
                helpMessage="What Sevices You Need ?"
                onChange={this.handelChange}
              >
                <option>-</option>
                <option>Website Design</option>
                <option>Mobile App</option>
                <option>SEO</option>
                <option>Digital</option>
              </AvField>
            </Col>

            <Col xs="10" sm="10">
              <AvField
                type="select"
                name="hearAboutUS"
                helpMessage="Who did you hear about us ?"
                onChange={this.handelChange}
              >
                <option>-</option>
                <option>LinkedIn</option>
                <option>Facebook</option>
                <option>Google</option>
                <option>Friends</option>
              </AvField>
            </Col>
            <Col xs="10" sm="10">
              <AvGroup>
                <AvInput
                  type="textarea"
                  name="message"
                  id="message"
                  required
                  placeholder="Message"
                  onChange={this.handelChange} />
                <AvFeedback>The Message is Required !</AvFeedback>
              </AvGroup>
            </Col>
          </Row>

          <FormGroup>
            <Button className="submit">Send Message</Button>
          </FormGroup>
        </AvForm>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Well Done !</ModalHeader>
          <ModalBody>
            Your Message has been sent,we will contact you soon.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Ok</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FormContent;