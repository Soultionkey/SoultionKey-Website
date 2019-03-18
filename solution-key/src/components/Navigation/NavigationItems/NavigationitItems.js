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
    render() {
        const { open } = this.state;

        return (
            <ul className="NavigationItems" >
                <NavigationItem link="/about" exact >About</NavigationItem>
                <NavigationItem link="" >
                    <div className="dropbtn">
                        <span onClick={this.handleClick}>Categories
                         <i><FaAngleDown /></i>
                        </span>
                        <div className={`menu ${open ? 'open' : ''}`}>
                            <ul>
                                <li><Link to="/services" style={{ color: 'black', padding: '5px', textDecoration: 'none' }}>Webaite Design</Link></li>
                                <li><Link to="/mobile" style={{ color: 'black', padding: '5px', textDecoration: 'none' }}>Mobile Application</Link></li>
                                <li><Link to="/seo" style={{ color: 'black', padding: '5px', textDecoration: 'none' }}>SEO</Link></li>
                            </ul>
                        </div>
                    </div>
                </NavigationItem>
                <NavigationItem link="/blog">Blog</NavigationItem>
                <NavigationItem link="/Contact">Contact</NavigationItem>

            </ul>
        );
    }
}

export default navigationItems;
