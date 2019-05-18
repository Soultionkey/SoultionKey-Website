import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom'
import { FaAngleDown } from '../../../../node_modules/react-icons/fa';

class navigationItems extends React.Component {
    state = {
        open: false
    }
    handleClick = (event) => {
        event.preventDefault();
        this.setState({ open: !this.state.open });
    }
    hideMenu = (event) => {
        event.preventDefault();
        this.setState({ open: false});
    }
    render() {
        const { open } = this.state;

        return (
            <ul className="NavigationItems" >
                <NavigationItem link="/about" exact click={this.hideMenu} >About</NavigationItem>
                <NavigationItem link="/clients" click={this.hideMenu} >Clients</NavigationItem>

                <NavigationItem link="" >
                    <div className="dropbtn">
                        <span onClick={this.handleClick} style={{overflow:'0'}}>Categories
                         <i><FaAngleDown /></i>
                        </span>
                        <div className={`menu ${open ? 'open' : ''}`}>
                            <ul >
                                <li onClick={this.handleClick}><Link to="/services" style={{ color: 'black', padding: '5px', textDecoration: 'none' }} >Website Design</Link></li>
                                <li onClick={this.handleClick}><Link to="/mobile" style={{ color: 'black', padding: '5px', textDecoration: 'none' }}>Mobile Application</Link></li>
                                <li onClick={this.handleClick}><Link to="/seo" style={{ color: 'black', padding: '5px', textDecoration: 'none' }}>Digital Marketing</Link></li>
                                <li onClick={this.handleClick}><Link to="/ecommerec" style={{ color: 'black', padding: '5px', textDecoration: 'none' }}>E-Commerce</Link></li>

                            </ul>
                        </div>
                    </div>
                </NavigationItem>
                <NavigationItem link="/blog" click={this.hideMenu} >Blog</NavigationItem>
                <NavigationItem link="/Contact" click={this.hideMenu} >Contact</NavigationItem>

            </ul>
        );
    }
}

export default navigationItems;
