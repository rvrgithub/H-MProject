import React, { Component } from 'react'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import Content from './Content'
import Offer from './Offer'
import WhyWeDo from './WhyWeDo'
import Video from './Video'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import SeveralWebDesignAccordion from './SeveralWebDesignAccordion'
import PageHelmet from '../../../component/shared/PageHelmet'
export default class WebDesigning extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    pageTitle="H&M Innovance LLP - Best Web Designing in dharuhera,india"
                    description="H&M INNOVANCE LLP is the best web designing Company in Dharuhera, India Our expert designers provide exclusive website development services in India"
                    keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
                    canonical= "https://www.hminnovance.com/web-designing"
                />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/webDesign.webp'
                    title='Web Design'
                    previous='Home'
                    next='Web Development'
                />
                {/* <!-- web design section end --> */}
                <Content />
                <SeveralWebDesignAccordion />
                {/* <SocialButton /> */}
                <Offer />
                <WhyWeDo />
                <Video />
                <Footer /> 
            </>
        )
    }
}
