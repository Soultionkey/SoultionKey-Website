import React, { Component } from 'react';
import { Button, Row, Col, FormGroup } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Closebtn from '../../img/close.png';
import Downbtn from '../../img/down.png';
import ChatContainer from '../pages/ChatContainer';
import './Chat.css';
import 'firebase/database';
import 'firebase/auth';
import MessageForm from '../pages/MessageForm';
class ChatLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBox: true,
            isLogin: false,
            email: '',
            userName:'',
            isOntheChat:false
        }
        this.handelChange = this.handelChange.bind(this);
    }

    toggleDown = () => {
        this.setState({ showBox: !this.state.showBox });
    }
    loginToChat = () => {
        this.setState({ isLogin: !this.state.isLogin });
    }

    handelChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                {this.state.showBox ?
                [
                    (this.state.isLogin
                      ? <MessageForm email={this.state.email} userName={this.state.userName} />
                      : <div className="rcw-widget-container rcw-opened">
                      <div className="rcw-conversation-container">
                          <div className="rcw-header">
                              <button className="rcw-close-button">
                                  <img src={Closebtn} className="rcw-close" alt="close" onClick={this.toggleDown} />
                              </button>
                              <h4 className="rcw-title">Welcome
                                 <span>
                                      <img src={Downbtn} className="rcw-down" alt="down" onClick={this.toggleDown} />
                                  </span>
                              </h4>
                          </div>
                          <div id="messages" className="rcw-log-container">
                              <AvForm onValidSubmit={this.loginToChat} className="chatLogin">
                                  <Row >
                                      <Col xs="10" sm="10">
                                          <AvGroup>
                                              <AvInput
                                                  className="chat-input"
                                                  name="userName"
                                                  id="userName"
                                                  required
                                                  placeholder="Name"
                                                  onChange={this.handelChange}
                                              />
                                              <AvFeedback>The Name is Required !</AvFeedback>
                                          </AvGroup>
                                      </Col>
                                      <Col xs="10" sm="10">
                                          <AvField
                                              className="chat-input"
                                              type="email"
                                              name="email"
                                              id="email"
                                              required
                                              placeholder="Email"
                                              onChange={this.handelChange}
                                          />
                                      </Col>
                                  </Row>
                                  <FormGroup>
                                      <Button
                                          className="chat-submit">Begin Chat</Button>
                                  </FormGroup>
                              </AvForm>
                          </div>
                      </div>
                  </div>
                    )
                  ]
                
            :
            <ChatContainer isOntheChat={this.state.isOntheChat} />
                } </div>
        );
    }
}

export default ChatLogin;
