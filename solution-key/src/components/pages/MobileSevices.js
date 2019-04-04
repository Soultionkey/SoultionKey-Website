import React, { Component } from 'react';
import Footer from './Footer';
import Spinner from './Spinner';
import './MobileServices.css';
class MobileSevices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstCardData: [],
            secondeCardData: [],
            thirdCardData: [],
            loading:false
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
            setTimeout(() => {
                this.setState({ loading: true })
            }, 2000)
    }

    render() {
        let Card1 = this.state.firstCardData;
        let Card2 = this.state.secondeCardData;
        let Card3 = this.state.thirdCardData;
        return (
            <div >
                <div className="mobile-pricing-container">
                    <div className="container-text">
                        <h4>Services</h4>
                        <h6>Soultion Key > <span className="container-span-text">Mobile Development </span></h6>
                    </div>
                </div>
                <h1 className="p"><strong>Mobile Services Pricing </strong></h1>
                <hr className="mobile-spirating-line" />
                {!this.state.loading ?
                    <Spinner />
                    :
                <div className="rowMobile ">
                    <div className="mobile-pricing-column">
                        <div className="mobile-pricing-card"  style={{ backgroundColor: 'silver' }}>
                            <h3>BRONZE<br /><span>$1000</span> </h3><hr />
                            <p dangerouslySetInnerHTML={{ __html: Card1 }} ></p>
                        </div>
                    </div>

                    <div className="mobile-pricing-column">
                        <div className="mobile-pricing-card" style={{ backgroundColor: 'goldenrod' }}>
                            <h3>SILVER<br /><span>$2500</span></h3><hr />
                            <p dangerouslySetInnerHTML={{ __html: Card2 }} ></p>
                        </div>
                    </div>

                    <div className="mobile-pricing-column">
                        <div className="mobile-pricing-card" style={{ backgroundColor: '#E5E4E2' }}>
                            <h3>GOLD<br /><span>$8,000</span></h3><hr />
                            <p dangerouslySetInnerHTML={{ __html: Card3 }} ></p>
                        </div>
                    </div>
                </div>
                }
                <div id="footer"><Footer /></div>
            </div>
        );
    }
}

export default MobileSevices;