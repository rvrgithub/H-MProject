import React, { Component } from 'react'
import Footer from '../../component/shared/Footer'
import Video from '../Services/WebDesigning/Video'
import Content from '../Services/WebDesigning/Content'
import PageHelmet from '../../component/shared/PageHelmet'
import Header from '../../component/commonheader/Header'
import HeadingImages from '../../component/HeadingImage'

export default class CRM extends Component {
  render() {
    return (
      <>
        <PageHelmet
          pageTitle="H&M Innovance LLP - Best Web Designing in dharuhera,india"
          description="H&M INNOVANCE LLP is the best web designing Company in Dharuhera, India Our expert designers provide exclusive website development services in India"
          keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
          canonical="https://www.hminnovance.com/crm"
        />
        <Header />
        {/* <!-- web design section start --> */}
        <HeadingImages
          image='assets/image/webDesign.webp'
          title='Android App '
          previous='Home'
          next='E.R.P.'
        />
        {/* <!-- web design section end --> */}
        <Content />
        <Video />
        <Footer />
      </>
    )
  }
}