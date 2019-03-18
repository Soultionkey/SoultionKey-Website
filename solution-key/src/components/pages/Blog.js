import React, { Component } from 'react';
import Footer from './Footer';
import Cards from './Cards';
import './Blog.css';
class Blog extends Component {
    render() {
        return (
            <div className="main">
                <div className="cards">
                <Cards />
                </div>
                <span className="span-container"><Footer /></span>
            </div>
        );
    }
}

export default Blog;