import React, { Component } from 'react'
// import PageHelmet from '../../component/shared/Pagehelmet'
import Header from '../../component/commonheader/Header'
// import ContactUs from './ContactSection'
import HeadingImage from '../../component/HeadingImage'
import Adress from './Adress'
import Footer from '../../component/shared/Footer'
import Map from './Map'
import SocialButton from '../../component/SocialButton'
import ContactSection from './ContactSection'
import PageHelmet from '../../component/shared/PageHelmet'

export default class ContactUs extends Component {
    render() {
        return (
            <>
                <PageHelmet
                    pageTitle="Digital marketing and Web Designing company in India | Contact Us" 
                    description="UG-21, First Floor, Bestech City Center Mall, Dharuhera, Haryana 123106,CONTACT US: 080594 65353UG-21, First Floor, Bestech City Center Mall, Dharuhera, 123106,+91-8059465353,+91-8979287631"
                    keywords="H M, H M Innovance LLP, It Solution Near me, Web designing company in gurgaon"
                    canonical="https://www.hminnovance.com/contactus"
                />
                <Header />
                {/* <!-- about section start --> */}
                <HeadingImage
                    image='assets/image/contactus/contactus.webp'
                    title='Contact Us'
                    previous='Home'
                    next='Blog'
                />
                {/* <!-- about section end --> */}
                {/* <!-- social buttons start --> */}
                {/* <SocialButton /> */}
                {/* <!-- about text start --> */}
                <ContactSection />
                <Adress />
                <Map />
                <Footer />
            </>
        )
    }
}
