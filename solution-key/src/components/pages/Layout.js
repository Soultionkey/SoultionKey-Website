import React, { Component } from 'react';
import LiveChat from '../pages/ChatContainer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import ExitPopUp from '../pages/ExitPopUp';

class Layout extends Component {
    constructor(props){

    super(props);
    this.state = {
        showSideDrawer: false,
        showExitPopUp:false
    }
}
    SideDrawerclosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawe };
        });
    }
    ExitPopUpclosedHandler = () => {
        this.setState({ showExitPopUp: false })
    }
    ExitPopUpState = () => {
        document.addEventListener("mouseleave", function(e){
            if( e.clientY < 0 )
            {
                 //alert("Hey don't leave. I have an free eBook for you");
                 this.setState({showExitPopUp: true})

            }
        }.bind(this), false);
    }
    render() {
        this.ExitPopUpState()
        return (
            <div >
                 <Toolbar drawerToggleclicked={this.sideDrawerToggleHandler} />
                 <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerclosedHandler} />
                
                <main >
                <div>
               <ExitPopUp
                  open={this.state.showExitPopUp}
                  closed={this.ExitPopUpclosedHandler} 
               />
               </div>
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