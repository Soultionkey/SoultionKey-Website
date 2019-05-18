import React from 'react';
import Logo from '../../Logo/Logo';
import './SideDrawer.css'
import Backdrop from '../../Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationitItems';
const sideDrawer = (props) => {
    let attachedclasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedclasses = ["SideDrawer", "Open"];
    }
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed} />

            <div className={attachedclasses.join(' ')}>
                <div className="LogoSide">
                    
                </div>
                <nav style={{marginTop:'-100px'}}>
                    <NavigationItems />
                </nav>
            </div>
        </div>
    );

};

export default sideDrawer;
