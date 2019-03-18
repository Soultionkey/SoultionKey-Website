import React, { Component } from 'react';
import { Button, Row, Col, FormGroup, ListGroupItem, ListGroup } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Closebtn from '../../img/close.png';
import Downbtn from '../../img/down.png';
import ChatContainer from '../pages/ChatContainer';
import Message from '../pages/Message';
import './ChatLogin.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
class ChatLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBox: true,
            isLogin: false,
            text: '',
            email: '',
            message: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }
    componentDidMount() {
        var config = {
            apiKey: "AIzaSyAb378xs-uV2RU5lz0WDi-7LqbruIe91wY",
            authDomain: "soultion-chat-5efab.firebaseapp.com",
            databaseURL: "https://soultion-chat-5efab.firebaseio.com",
            projectId: "soultion-chat-5efab",
            storageBucket: "soultion-chat-5efab.appspot.com",
            messagingSenderId: "591970254632"
        }
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        this.getMessage()
    }
    toggleDown = () => {
        this.setState({ showBox: !this.state.showBox });
    }
    loginToChat = () => {
        this.setState({ isLogin: !this.state.isLogin });
    }
    remaineInChat = () => {
        this.setState({ showBox: !this.state.showBox });

    }
    handelChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.text.trim() !== "") {
            this.writeMessageToDB(this.state.text)
            this.setState({ text: " " })
        }
    }
    writeMessageToDB = (newMessage) => {
        firebase
            .database()
            .ref("messages/")
            .push({
                text: newMessage
            })
    }
    getMessage = () => {
        var MessageDB = firebase.database().ref("messages/")
        MessageDB.on("value", snapshot => {
            let arrivedMessage = []
            snapshot.forEach(element => {
                var Msg = element.val()
                arrivedMessage.push({ id: element.key, text: Msg.text })
            })
            this.setState({ message: arrivedMessage })
        })
    }
    render() {
        return (
            <div>
            {this.state.showBox ?
            [
                (this.state.isLogin ?
                    <div className="rcw-widget-container rcw-opened">
                    <div className="rcw-conversation-container">
                        <div className="rcw-header">
                            <button className="rcw-close-button">
                                <img src={Closebtn} className="rcw-close" alt="close" onClick={this.toggleDown} />
                            </button>
                            <h4 className="rcw-title">Welcome
                                <span>
                                    <img src={Downbtn} className="rcw-down" alt="down" onClick={this.remaineInChat} />
                                </span>
                            </h4>

                        </div>
                        <div id="messages" className="rcw-messages-container">
                            <div>
                                {this.state.message.map((message) =>
                                    <Message message={message.text} />
                                )}
                            </div>
                            <form className="rcw-sender">
                                <input
                                    name="text"
                                    type="text"
                                    className="rcw-new-message"
                                    placeholder="Type a message..."
                                    onChange={this.handelChange}
                                />
                                <button type="submit" className="rcw-send">
                                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTM1LjUgNTM1LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzNS41IDUzNS41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9InNlbmQiPgoJCTxwb2x5Z29uIHBvaW50cz0iMCw0OTcuMjUgNTM1LjUsMjY3Ljc1IDAsMzguMjUgMCwyMTYuNzUgMzgyLjUsMjY3Ljc1IDAsMzE4Ljc1ICAgIiBmaWxsPSIjY2JjYmNiIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                                        className="rcw-send-icon"
                                        alt="send"
                                        onClick={this.handleSubmit}
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                   :
                   <div className="rcw-widget-container rcw-opened">
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
                       <div id="messages" className="rcw-messages-container">
   
                                           <AvForm onValidSubmit={this.loginToChat} className="chatLogin">
                                               <Row >
                                                   <Col xs="10" sm="10">
                                                       <AvGroup>
                                                           <AvInput
                                                               className="chat-input"
                                                               name="name"
                                                               id="name"
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
            <ChatContainer islogin={this.state.isLogin} />
            }
             </div>  
        );
    }
}

export default ChatLogin;
