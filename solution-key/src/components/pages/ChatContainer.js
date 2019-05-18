import React, { Component } from 'react';
import './ChatContainer.css';
import messageIcon from '../../img/phillip.jpg';
import LoginForm from '../pages/LoginForm';
import MessageForm from '../pages/MessageForm';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChat: false,
            islogin: true,
            isOntheChat: this.props.isOntheChat,
            userName: this.props.userName,
            Date: this.props.Date
        }
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
    }
    openChat() {
        this.setState({ showChat: !this.state.showChat });
    }
    render() {
        return (
            <div >
                {this.state.showChat ?
                    [
                        (this.state.isOntheChat
                            ? <MessageForm userName={this.state.userName} Date={this.state.Date}/>
                            : <LoginForm />
                        )
                    ]
                    :
                    <div className="sticky-container">
                        <div className="sticky" onClick={() => this.openChat()}>
                            <span>Live chat with SoultionKey </span>
                            <img src={messageIcon} className=".img-circle" alt="chatImage" />
                        </div>
                    </div>
                }
            </div>
        );
    }
}
export default ChatContainer;
