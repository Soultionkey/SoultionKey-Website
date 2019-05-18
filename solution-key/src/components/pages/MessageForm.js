import React, { Component } from 'react';
import Closebtn from '../../img/close.png';
import Downbtn from '../../img/down.png';
import ChatContainer from '../pages/ChatContainer';
import Message from '../pages/Message';
import './Chat.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
class ChatLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBox: true,
            text: '',
            email: this.props.email,
            userName: this.props.userName,
            Date: this.props.Date,
            i: 0,
            message: [],
            isOntheChat: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handelChange = this.handelChange.bind(this);
        this.messageRef = firebase.database().ref().child('messages').child(this.state.userName);
    }
    componentDidMount() {
        this.getMessage();
    }

    toggleDown = () => {
        this.setState({ showBox: !this.state.showBox });
    }
    remaineInChat = () => {
        this.setState({ showBox: !this.state.showBox });

    }
    handelChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.text !== ' ') {
            this.messageRef
                .push({
                    text: this.state.text,
                    userName: this.state.userName ,
                    userDate:new Date().toString().substring(0,10) +" "+ new Date().getHours().toString() + ":"+ new Date().getMinutes().toString()
                })
            this.setState({ text: ' ' })
        }
    }
    handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        this.handleSubmit(event);
    }
    getMessage = () => {
        this.messageRef
            .on("value", snapshot => {
                let arrivedMessage = []
                snapshot.forEach(element => {
                    var Msg = element.val()
                    arrivedMessage.push({ id: element.key, text: Msg.text })
                })

                this.setState(
                    { message: arrivedMessage },
                    () => document.getElementById('theDiv').scrollIntoView({ behavior: "smooth" })
                )
            })
    }

    render() {
        return (
            <div>
                {this.state.showBox ?
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
                            <div>
                                <div id="messages" className="rcw-messages-container">
                                    <div id="messages"style={{marginBottom:'-180px'}}>
                                        {this.state.message.map((message,i) =>
                                            <Message key={i} message={message.text}  userName={this.state.userName} Date={this.state.Date} />
                                        )}
                                        <div id="theDiv"></div>
                                    </div>

                                    <form className="rcw-sender">
                                        <input
                                            name="text"
                                            type="text"
                                            className="rcw-new-message"
                                            placeholder="Type a message..."
                                            onChange={this.handelChange}
                                            onKeyPress={this.handleKeyPress}
                                            value={this.state.text}
                                        />
                                        <button type="submit" className="rcw-send" >
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
                    </div>
                    :
                    <ChatContainer isOntheChat={this.state.isOntheChat} userName={this.state.userName} Date={this.state.Date}/>
                }
            </div>
        );
    }
}

export default ChatLogin;
