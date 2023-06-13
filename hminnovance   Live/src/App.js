import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import ScrollTop from "./component/ScrollTop";
import SpinnerExample from "./component/SpinnerExample";
import Error from "./Pages/ErrorPage/Error";
import OurProducts from "./Pages/MYB/MYBScholarship";
const Erp  = lazy(()=> import('./Pages/Products/Erp'));
const Crm = lazy(()=>import('./Pages/Products/Crm'));
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import("./Pages/About/About"))
const WebDesigning = lazy(() => import("./Pages/Services/WebDesigning/WebDesigning"))
const WebDevelopment = lazy(() => import("./Pages/Services/WebDevlopement/WebDevelopment"))
const AppDevelopment = lazy(() => import("./Pages/Services/AppDevlopement/AppDevelopment"))
const DigitalMarketing = lazy(() => import("./Pages/Services/DigitalMarketing/DigitalMarketing"))
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"))
const SoftwareDevlopement = lazy(() => import("./Pages/Services/SoftwareDevlopement/SoftwareDevlopment"))
const AutomatedSystem = lazy(() => import("./Pages/Services/AutomatedSystem/AutomatedSystem"))
const BusinessAnalysis = lazy(() => import("./Pages/Services/BussinessAnalysis/BusinessAnalysis"))
const SocialMediaMarketing = lazy(() => import("./Pages/Services/SocialMarketing/SocialMediaMarketing"))
const ContactUs = lazy(() => import("./Pages/Contact/ContactUs"))
const Login = lazy(() => import("./Pages/login/Login"))
const BlogDetail = lazy(() => import("./Pages/Blog/BlogDetail"))
const WriteBlog = lazy(() => import("./Pages/Blog/WriteBlog"))
const Blogs = lazy(() => import("./Pages/Blog/Blogs"))




export default function App() {
    return (
        <Router>
            <Suspense fallback={<SpinnerExample />}>
                <ScrollTop />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/home" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/contactUs" element={<ContactUs />}></Route>
                    <Route exact sensitive={false} path={('/web-designing').toLowerCase()} element={<WebDesigning />}></Route>
                    <Route exact path="/web-development" element={<WebDevelopment />}></Route>
                    <Route exact path="/app-development" element={<AppDevelopment />}></Route>
                    <Route exact path="/software-development" element={<SoftwareDevlopement />}></Route>
                    <Route exact path="/digital-marketing" element={<DigitalMarketing />}></Route>
                    <Route exact path="/automated-system" element={<AutomatedSystem />}></Route>
                    <Route exact path="/business-analysis" element={<BusinessAnalysis />}></Route>
                    <Route exact path="/socialMedia-marketing" element={<SocialMediaMarketing />}></Route>
                    <Route exact path="/gallery" element={<Gallery />}></Route>
                    <Route exact path="/ourProducts" element={<OurProducts />}></Route>
                    <Route exact path="/*" element={<Error />}></Route>
                    <Route exact path="/blog" element={<Blogs />}></Route>
                    <Route exact path="/admin-panel/123" element={<Login />}></Route>
                    <Route exact path="/blog/:id" element={<BlogDetail />}></Route>
                    <Route exact path="/write-blog" element={<WriteBlog />} />
                    <Route  exact path="/product/erp" element={<Erp/>}/>
                    <Route exact path="/product/crm" element={<Crm/>} />
                </Routes>
            </Suspense>
        </Router>
    );

}


// https://startbootstrap.com/themes/landing-pages