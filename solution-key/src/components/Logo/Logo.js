import React from 'react';
import './Logo.css'
import { Link } from 'react-router-dom'
import EastBayLogo from '../../img/logo.png';
const logo = (props) => (
    <div className="Logo">
        <Link to="/" >
            <img src={EastBayLogo} alt="Logo" />
        </Link>
    </div>
);
export default logo;