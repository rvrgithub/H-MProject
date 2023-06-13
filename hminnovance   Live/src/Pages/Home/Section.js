import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./home.css"
export default class Section extends Component {
    render() {
        return (
            <section className='sectionImg'>
                {/* {opacity: '0.4'} assets/image/Lead.svg*/}
                {/* <div style={{ width: "100%", background: "blue", backgroundImage: `url("assets/image/A.jpg")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}> </div> */}
                {/* <div className='mainContainer' style={{ width: "100%", backgroundImage: `url("assets/image/A.jpg")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                </div> */}
                <img src="assets/image/A.jpg" class="img-fluid h-75" alt="Responsive image" />
                <div className='scroll-text'>
                    <marquee direction="left" scrollamount="13">
                        <p className='marque_text'>MYB - Scholarship Program for 8 to 12 class student. Stay tuned for more update</p>
                    </marquee>
                </div>
                {/* <div className='centered'>
                    <h5 style={{ color: "color" }}>STRIVE TO LEAD</h5>
                    <h4 className='section_text testStyle'>
                        𝓦𝓮 𝓪𝓻𝓮 𝓬𝓸𝓶𝓶𝓲𝓽𝓽𝓮𝓭 𝓽𝓸 𝓬𝓻𝓮𝓪𝓽𝓲𝓷𝓰 𝓽𝓱𝓲𝓷𝓰𝓼 𝓽𝓱𝓪𝓽 𝓱𝓪𝓿𝓮 𝓷𝓮𝓿𝓮𝓻 𝓫𝓮𝓮𝓷 𝓫𝓮𝓯𝓸𝓻𝓮.. 
                          We are committed to creating things that have never been before,  </h4>
                    <NavLink to='/contactUs'><button className='section_btn container' style={{ width: "170px" ,margin:"20px" }}>Meet With Us</button ></NavLink>
                    <h6 >THAT BRINGS OUT A CHANGE WITH NEW
                        RESULTS, AND A NEW ERA.</h6>
                </div> */}
            </section >
        )
    }
}