import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingSection from "../components/landing/landing.component";
import Depresso from "../components/depresso/depresso.component";
import VideoSection from "../components/video-section/video-section.component";
import Experience from "../components/experience/experience.component";
import Beans from "../components/beans/beans.component";
import Variety from "../components/variety/variety.component";
import Benefits from "../components/benefits/benefits.component";
import Review from "../components/reviews/reviews.component";
import Welcome from "../components/welcome/welcome.component";
import Location from "../components/location/location.component";
import Footer from "../components/footer/footer.component";

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <LandingSection/>
        <Experience/>
        <VideoSection/>
        <Depresso/>
        <Beans/>
        <Variety/>
        <Review/>
        <Benefits/>
        <Welcome/>
        <Location/>
        <Footer/>
    </Layout>
)

export default IndexPage
