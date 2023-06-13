import React, { Component } from 'react'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import SocialMedia from './SocialMedia'
import BusinessOverall from './BusinessOverall'
import EnhancedEngagement from './EnhancedEngagement'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import PageHelmet from '../../../component/shared/PageHelmet'
export default class SocialMediaMarketing extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    // pageTitle="About Us | We Digitalize Your Dreams with Our Designing Skills"
                    // description="H&M Innovance LLP is a digital marketing firm that builds and promotes brands to turn your sites' visualizations into reality. Trust us; we are aware of the pulse of your company."
                    // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
                    canonical= "https://www.hminnovance.com/socialMedia-marketing"
                />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/dgtm.png'
                    title='Social Marketing'
                    previous='Home'
                    next='Gallery'
                />
                {/* <!-- web design section end --> */}
                {/* <SocialButton /> */}
                {/* <SocialMedia /> */}
                <BusinessOverall />
                <EnhancedEngagement />
                <Footer />
            </>
        )
    }
}
