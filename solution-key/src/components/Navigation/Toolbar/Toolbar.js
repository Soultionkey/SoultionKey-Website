import React, { Component } from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationitItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
class toolbar extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    constructor(props) {
        super(props);
        this.state = {
            
    };
    
}
render() {
    const { match, location, history } = this.props

    
    const headerColor =location.pathname  === '/' ? 'white' :  'rgba(0,0,0,0.1)' ;
    return (    
    <header className="Toolbar" style={{backgroundColor:headerColor}}>
        <DrawerToggle clicked={this.props.drawerToggleclicked} />
        <div className="LogoToolbar" >
             <Logo />
            
        </div>
        <nav className="DesktopOnly">
           <NavigationItems />
        </nav>
    </header>
);
}
}
export default withRouter(toolbar);
