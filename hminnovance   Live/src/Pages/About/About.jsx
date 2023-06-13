import React from 'react'
import HeadingImage from '../../component/HeadingImage'
import SocialButton from '../../component/SocialButton'
// import PageHelmet from '../../component/shared/Pagehelmet'
import Header from '../../component/commonheader/Header'
import Footer from '../../component/shared/Footer'
import PageHelmet from '../../component/shared/PageHelmet'

const About = () => {
    return (
        <>
            <PageHelmet
                pageTitle="About Us | We Digitalizes Your Dreams with our Designing Skills"
                description="Get to know about our culture, achievements, team and everything in between We strive to serve the best to our clients as well as our employees"
                keywords="About US Website Designing, WEB Development, Digital Marketing"
                canonical="https://www.hminnovance.com/about"
            />
            {/* <!-- header start --> */}
            <Header />
            {/* <!-- header end --> */}

            {/* <!-- about section start --> */}
            <HeadingImage
                image='assets/image/About/about.png'
                title='About Our  &quot;
                 Company That Digitalizes Your Dreams! &quot; '
                previous='Home'
                next='Web Designing'
            />
            {/* <!-- about section end --> */}

            {/* <!-- social buttons start --> */}
            {/* <SocialButton /> */}
            {/* <!-- about text start --> */}
            <div className="container pt-5">
                <div className="row" style={{ textAlign: "center", margin: "30px" }}>
                    <h2 className='mb-3' style={{ textAlign: "center", justifyContent: "center" }}><strong>We are H&amp;M INNOVANCE LLP and  <span style={{ color: "#0e83e5", fontWeight: 500 }}> we are </span>
                        <br />  <span style={{ color: "#0e83e5 ", fontWeight: 500 }}> &quot; An IT Solution Company in India&quot; </span> </strong> </h2>
                    <div className="col-12 col-lg-9-auto-p-30 justify-content-center align-items-center">
                        <div>
                            <p>H&amp;Hello and welcome to H&M INNOVANCE LLP, the pioneering software developers.
                                Our unwavering priority is to provide top-notch engineering and software development teams for businesses all around the world. You have access to a wide range of services at H&M INNOVANCE LLP, including product design, development, and IT personnel. Exceptional quality and functionality are ensured by the seamless collaboration of our dedicated and skilled staff as they bring your creative ideas to life.
                                Our team members have been pursuing excellence for more than 2 years, building ground-breaking products and on-demand software teams. We continuously exceed expectations for renowned clientele, from start-ups to multinationals.
                                Nothing makes us happier than the prospect of becoming the ones to spearhead the next
                                major transformation after serving more than 100 clients. We have created more than 100
                                websites, 50 mobile applications, and 100 digital campaigns, but we still have a hunger for
                                more. We are working together to become the go-to provider of digital solutions in the entire
                                world.
                                With the help of our designing abilities, we turn your ideas into reality and provide your
                                company a stunning online presence.
                                Come have coffee with us if you have a concept but are unclear of how to make it a reality, or
                                give us a call right away if you already have a brand but want to expand its reach outside
                                present markets. We are the company you&#39;ve always wanted to work with.</p>
                        </div>
                    </div>
                    {/* <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <img style={{ maxWidth: "100%", height: "24.563rem" }} src="assets/image/WhoAreWe.png" alt="About Hm" />
                    </div> */}
                </div>
            </div>
            <div className="container  auto mt-20" >
                <div className="row  justify-content-center align-items-center">
                    {/* <div className="col-12 col-lg-6  justify-content-center align-items-center" data-aos="zoom-in"> */}
                    <div className="col-8 col-md-4  mb-4 mb-md-4 mb-xl-0" data-aos="zoom-out-up">
                        <div className="card m-auto h-90 w-120  justify-content-center align-items-center" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                            <img src='https://img.freepik.com/vecteurs-libre/concept-abstrait-discipline_335657-3018.jpg?w=360      ' className="card-img-top" alt="web designing" title="web designing" style={{ marginTop: "20px", borderRadius: "50%", height: "150px", width: "150px" }} />
                            <div className="card-body">
                                <h2 className="card-title fs-4 align-items-center" style={{ textAlign: "center" }}><strong>Oue Mission</strong></h2>
                                <p className="card-text" style={{ textAlign: "center" }}>By working together with our clients and utilizing our expertise in software development, we hope
                                    to offer specialized solutions that accelerate their successes. Our commitment is to providing
                                    exceptional service, encouraging innovation, and creating lasting value through enduring
                                    partnerships and continuous growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-md-4" data-aos="zoom-out-down">
                        <div className="card m-auto h-120 w-120  justify-content-center align-items-center  " style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                            <img src=' https://siteuniverse.io/wp-content/uploads/2021/01/m0027b-11-1024x853.jpg' className="card-img-top" alt="web designing" title="web designing" style={{ marginTop: "20px", borderRadius: "50%", height: "150px", width: "150px" }} />
                            <div className="card-body">
                                <h2 className="card-title fs-4 align-items-center" style={{ textAlign: "center" }}><strong>Oue Vision</strong></h2>
                                <p className="card-text" style={{ textAlign: "center" }}>To lead the world in providing cutting-edge software solutions, helping companies succeed in the
                                    digital age, and having a beneficial impact on society through cutting-edge technology and top-notch
                                    customer service.{/* Furthermore, having a solid team foundation
                    and business analyst(s) can save a project from failure.  Furthermore, having a solid team foundation
                    and business analyst(s) can save a project from failure.*/}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-12 col-lg-6 order-lg-1 d-flex justify-content-center align-items-center pb-2" data-aos="zoom-out">
                            <img style={{ maxWidth: "100%", height: "24.563rem" }} src="assets/image/WhyChooseUs.png" alt="About Hm" />
                        </div> */}
                {/* </div> */}
            </div>
            {/* <!-- about gallry --> */}

            <div className="container mt-5" >
                <div className='text-center mb-4' style={{ testAlign: "center", justifyContent: "center" }}><h2><strong>Our Team</strong></h2></div>

                <div className="row d-flex justify-content-center align-items-evenly" style={{ testAlign: "center", justifyContent: "center" }}>
                    <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column" style={{ testAlign: "center", justifyContent: "center" }}>
                        <div>
                            <img className='img-fluid' src="./assets/image/gallery/IMG_8472.jpg" style={{ height: '350px', width: '400px' }} alt='gallery' title=' Manish Choudhary' />
                        </div>
                        <div>
                            < h3 className='pt-2'><strong>Manish Choudhary</strong></h3>
                            <p>Co-Founder M.Tech Data Science, PGDM A.I & M.L. with 8+ Years Experience</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column">
                        <div>
                            <img className='img-fluid' src="./assets/image/gallery/IMG-8471.jpg" style={{ height: '350px', width: '500px' }} alt='gallery' title='Hemant' />
                        </div>
                        <div>
                            < h3 className='pt-2'><strong>Hemant</strong></h3>
                            <p>Co-Founder M.Tech Data Science</p>
                        </div>
                        {/* <div>
                           < h3 className='mt-0 p-0'><strong>Hemant</strong></h3>
                          <p>Co-Founder M.Tech Data Science</p>
                       </div> */}
                    </div>

                    {/* <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column">
                        <div>
                            <img className='img-fluid' src="./assets/image/gallery/IMG_8505.jpg" style={{ height: '350px', width: '400px' }} alt='gallery pic' />
                        </div>
                        <div className='fs-0' >
                            < h3 className='pt-2'><strong>Sandeep Sharma</strong></h3>
                            <p>2+ Years Experience as a Full Stack Developer using MERN.</p>
                        </div>
                    </div> */}

                    {/* <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column">
                        <div>
                            <img className='img-fluid' src="./assets/image/gallery/satish.jpg" style={{ height: '350px', width: '400px' }} alt='gallery pic' />

                        </div>
                        <div>
                            < h3 className='pt-2'><strong>Satish Yadav</strong></h3>
                            <p>B.Tech in Computer Science, having 8 years of Experience in Server & Networking</p>
                        </div>
                    </div> */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column">
                        <div>
                            <img className='img-fluid' src="./assets/image/gallery/Geetika.webp" style={{ height: '350px', width: '400px' }} alt='gallery pic' title='Geetika Oberoi' />
                        </div>
                        <div>
                            < h3 className='pt-2'><strong>Geetika Oberoi</strong></h3>
                            <p>5+ Years Experience in Digital Marketing</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column">
                        <div>
                            <img className='img-fluid' src="./assets/image/gallery/Harsha.JPG" style={{ height: '350px', width: '400px' }} alt='gallery pic' title='Harsha' />
                        </div>
                        <div>
                            < h3 className='pt-2'><strong>Harsha</strong></h3>
                            <p>Digital Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer start */}
            <Footer />
            {/* footer end */}
        </>
    )
}

export default About












/*


import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./home.css"
export default class Section extends Component {
    render() {
        return (
            <section className='sectionImg'>

                <img src='assets/image/Section.png' alt='section' title="section" className="img-fluid h-75" width='100%' style={{ opacity: '0.4' }} />
                <div className='scroll-text'>
                    <marquee direction="left" scrollamount="13">
                        <p className='marque_text'>MYB - Scholarship Program for 8 to 12 class student. Stay tuned for more update</p>
                    </marquee>
                </div>
                <div className='centered'>
                    <h5 style={{ color: "gray" }}>STRIVE TO LEAD</h5>
                    <h4 className='section_text testStyle'>We are committed to creating things that have never been before,</h4>
                    <h6>THAT BRINGS OUT A CHANGE WITH NEW
                        RESULTS, AND A NEW ERA.</h6>
                    <NavLink to='/contactUs'><button className='section_btn container' style={{ width: "170px" }}>Meet With Us</button ></NavLink>
                </div>
            </section >
        )
    }
}


*/