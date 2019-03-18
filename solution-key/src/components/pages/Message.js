import React, { Component } from 'react';
import './Message.css';
export default class Message extends Component {
    state = {
        user: this.props.userName,
        isAdmin: '',
        newUser: true,
        message: ''
    }
    
    componentDidMount() {
        if (this.state.user === "phillip123") {
            this.setState({ isAdmin: true })
        }
        else {
            this.setState({ isAdmin: false })
        }
    }
    render() {
        return (
            <div >
                {this.state.isAdmin ?
                    <ul className="admin">
                        <li className="admin-message" >
                            <div className="admin-bubble" >
                                {this.props.message}
                            </div>
                        </li>
                    </ul>
                    :
                    <ul className="client">
                        <li className="client-message" >
                            <div className="client-bubble" >
                                {this.props.message}
                            </div>
                        </li>
                    </ul>
                }
            </div>
        )
    }
}

