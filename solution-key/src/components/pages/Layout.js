import React, { Component } from 'react';
import LiveChat from '../pages/ChatContainer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerclosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawe };
        });
    }

    render() {
        return (
            <div >
                 <Toolbar drawerToggleclicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerclosedHandler} />
                <main >
                    {this.props.children}
                </main>
               
                <div>
                    <LiveChat />
                </div>
            </div>
        );
    }
}
export default Layout;