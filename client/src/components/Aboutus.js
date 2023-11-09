import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Logo from './Img/h_&_s_black.png'

export default class Aboutus extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="logo">
                        <img id="aboutLogo" src={Logo} alt="" />
                    </div>
                    <div className="about-section">
                        <div className="inner-width">
                            <h1>About Us</h1>
                            <div className="border"></div>
                            <div className="about-section-row">
                                <div className="about-section-col">
                                    <div className="about">
                                        <p>
                                            Launched in 2023, Our technology platform connects customers,restaurant partners and delivery partners,serving their multiple needs.Customers use our platform to search and discover restaurants,order food delivery.
                                        </p>
                                        <Link to="/">Home</Link>
                                    </div>
                                </div>
                                <div className="about-section-col">
                                    <div className="skills">
                                        <div className="skill">
                                            <div className="title">Quality</div>
                                            <div className="progress">
                                                <div className="progress-bar p1"><span>90%</span></div>
                                            </div>
                                        </div>

                                        <div className="skill">
                                            <div className="title">Affordability</div>
                                            <div className="progress">
                                                <div className="progress-bar p2"><span>95%</span></div>
                                            </div>
                                        </div>

                                        <div className="skill">
                                            <div className="title">Convenient</div>
                                            <div className="progress">
                                                <div className="progress-bar p3"><span>90%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style>

                </style>
            </>
        )
    }
}
