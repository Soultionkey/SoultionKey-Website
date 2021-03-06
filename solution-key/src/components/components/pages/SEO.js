import React, { Component } from 'react';
import Footer from './Footer';
import Spinner from './Spinner';
import './SEO.css';
import Form from './FormContent';

class SEO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCardData: [],
            secondeCardData: [],
            thirdCardData: [],
            fourthCardData: [],
            loading: false
        };
    }
    componentDidMount() {
        let firstCard = "http://localhost/wordpress/wp-json/wp/v2/posts/27";
        fetch(firstCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    firstCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });
        let secondeCard = "http://localhost/wordpress/wp-json/wp/v2/posts/68";
        fetch(secondeCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    secondeCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        let thirdCard = "http://localhost/wordpress/wp-json/wp/v2/posts/94";
        fetch(thirdCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    thirdCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        let fourthCard = "http://localhost/wordpress/wp-json/wp/v2/posts/96";
        fetch(fourthCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    fourthCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        setTimeout(() => {
            this.setState({ loading: true })
        }, 2000)
    }

    render() {
        let Card1 = this.state.firstCardData;
        let Card2 = this.state.secondeCardData;
        let Card3 = this.state.thirdCardData;
        let Card4 = this.state.fourthCardData;


        return (
            <div>
                {/* <div className="digital-pricing-container">
                    <div className="container-text">
                        <h4>Services</h4>
                        <h6>Soultion Key > <span className="container-span-text">SEO</span></h6>
                    </div>
                </div> */}
                <div id="main-content">
                    <div id="bg-seo-hero" ></div>
                    <div className="seo-home-serperator">
                        <div className="seo-home-section">
                            <h1 className="pricing-text"><strong><br /><br />SEO Services Pricing </strong></h1>
                            <hr className="digital-spirating-line" />
                            {!this.state.loading ?
                                <Spinner />
                                :
                                <div className="digital-pricing-row">
                                    <div className="digital-pricing-column">
                                        <div className="digital-pricing-card " style={{ backgroundColor: '#CD7F32' }}>
                                            <h3>BRONZE<br /><span>$1000</span> </h3><hr />
                                            <p dangerouslySetInnerHTML={{ __html: Card1 }} ></p>
                                        </div>
                                    </div>

                                    <div className="digital-pricing-column ">
                                        <div className="digital-pricing-card " style={{ backgroundColor: 'silver' }}>
                                            <h3>SILVER<br /><span>$2500</span></h3><hr />
                                            <p dangerouslySetInnerHTML={{ __html: Card2 }} ></p>
                                        </div>
                                    </div>

                                    <div className="digital-pricing-column">
                                        <div className="digital-pricing-card" style={{ backgroundColor: 'goldenrod' }}>
                                            <h3>GOLD<br /><span>$8,000</span></h3><hr />
                                            <p dangerouslySetInnerHTML={{ __html: Card3 }} ></p>
                                        </div>
                                    </div>

                                    <div className="digital-pricing-column">
                                        <div className="digital-pricing-card" style={{ backgroundColor: '#E5E4E2' }}>
                                            <h3>PLATINUM<br /><span>$25,000+</span></h3><hr />
                                            <p dangerouslySetInnerHTML={{ __html: Card4 }} ></p>
                                        </div>
                                    </div>
                                </div>
                            }
                         </div>
                    </div>
                    <div id="main-footer">
                        <br />
                            <p className= "contact-text ">Contact Us</p>
                            <Form />
                            <p className="footer-data"><hr />Soultion key ©2019</p>
                        </div>
                    </div>

                </div>
                        );
                    }
                }
                
export default SEO;