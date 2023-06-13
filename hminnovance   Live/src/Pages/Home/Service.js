import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Service extends Component {
    render() {
        return (
            <div className="container pb-lg-5 mt-4 p-30" >
                <h2 className="mb-5 text-center"><strong>Services We Provide</strong></h2>
                <div className="row" >
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0 " data-aos="zoom-out-up">
                        <div className="card m-auto h-100 " >
                            <div style={{ padding: "30px", background: "#e7dae0" }}>  <img src='assets/image/services/web_design.webp' className="card-img-top" alt="web designing" title="web designing" height="210" width="210" />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Web Designing</strong></h2>
                                <p className="card-text">Web design is the process of creating the visual and functional elements of a website, with the goal
                                    of making the site easy to use, visually appealing, and accessible to a wide range of users. A web
                                    designer....</p>
                                <NavLink to="/web-designing" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-down">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/web_development.webp' className="card-img-top" alt="Web Development" title='Web Development' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Web Development</strong></h2>
                                <p className="card-text">We offer specialized web app solutions to best suit your upcoming digital products, using highly
                                    scalable front-end frameworks and well-documented backend solutions......</p>
                                <NavLink to="/web-development" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-left">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/digital_marketing.webp' className="card-img-top" alt="Digital Marketing" title='Digital Marketing' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Digital Marketing</strong></h2>
                                <p className="card-text">We implement tailored strategies for brands to realise their distinctive vision by utilising our
                                    diversified team of strategists, performance marketers, and creative specialists.....</p>
                                <NavLink to="/digital-marketing" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3  mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-right">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/software_development.webp' className="card-img-top" alt="Software Development" title='Software Development' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Software Development</strong></h2>
                                <p className="card-text">Software development refers to the process of designing, writing, testing, and maintaining software.
                                    It is a multi-step process that involves gathering requirements, creating a design, writing code......</p>
                                <NavLink to="/software-development" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-lg-5">
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-in-right">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/automated_system.webp' className="card-img-top" alt="Automated System" title='Automated System' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Automated System</strong></h2>
                                <p className="card-text ">Automated systems are used in a variety of industries, including manufacturing,
                                    transportation, and finance, to increase efficiency, reduce costs, and and improve accuracy. They......</p>
                                <NavLink to="/automated-system" className="btn btn-primary ">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-in-up">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/business_analysis.webp' className="card-img-top" alt="Business Analysis" title='Business Analysis' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Business Analysis</strong></h2>
                                <p className="card-text">Business analysis refers to the practice of identifying and defining business requirements and
                                    determining solutions to business problems. The goal of business analysis is to align...</p>
                                <NavLink to="/business-analysis" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0" data-aos="zoom-in-down">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/social_media.webp' className="card-img-top" alt="Social Marketing Media" title='Social Marketing Media' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Social Marketing Media</strong></h2>
                                <p className="card-text">Social media marketing is a form of digital marketing that involves promoting products, services, or
                                    brands through social media platforms. It involves creating and sharing content, such as text....</p>
                                <NavLink to="/socialMedia-marketing" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-md-5 mb-xl-0" data-aos="zoom-in-left">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/App_development.webp' className="card-img-top" alt="App Development" title='App Development' height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>App Development</strong></h2>
                                <p className="card-text">To design unique mobile apps, we successfully code your specifications, ensuring great revenue and
                                    millions of downloads. At scale, we drive innovation.....</p>
                                <NavLink to="/app-development" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
