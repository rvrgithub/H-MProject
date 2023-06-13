import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container mt-md-5" >
                <div className="row">
                    <div className="col-12 col-lg-6 ps-md-5">
                        <h1 className="my-3" style={{ fontWeight: "bold" }}>We Expertise in All Web, Software & Digital Services</h1>
                        <p>H&amp;M INNOVANCE LLP is a group of Tech Hunters who are scheduling their time to
                            anticipate the next significant design advancement for the growth of your digital business.
                            We are a welcoming group of creatives, expert website designers, leading website
                            developers, and techies who consistently produce fantastic websites, mobile applications, and
                            e-commerce websites. We are their go-to website design company in Gurugram, whether they
                            are large corporations or new businesses. You are here because you understand the impact a
                            website can have, whether you are a non-profit organisation or a developing corporation.
                            With your input, H&amp;M INNOVANCE LLP creates websites that are full of character and
                            attention to detail. </p>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center col-lg-6">
                        <img className="img-fluid" src="assets/image/about1.gif" alt="Best Web Design and Devlopment Company In Gurgaon" title='Best Web Design and Devlopment Company In Gurgaon' style={{ height: '280px' }} />
                    </div>
                </div>
            </div>
        )
    }
}
