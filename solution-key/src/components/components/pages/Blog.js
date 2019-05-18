import React, { Component } from 'react';
import Cards from './Cards';
import './Blog.css';
import Form from './FormContent';

class Blog extends Component {
    render() {
        return (
            <div >
                <div id="main-content">
                    <div >
                        <div id="bg-blog-hero" ></div>
                        <div className="blog-home-serperator">
                            <div className="blog-home-section">
                                <div className="blog-rowHome">
                                    <div className="blog-home-column">
                                        <div>
                                            <Cards />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="main-footer">
                        <Form />
                        <p className="footer-data"><hr />Soultion key ©2019</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default Blog;