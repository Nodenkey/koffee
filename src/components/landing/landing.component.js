import React, {useEffect, useState} from 'react';
import {
    Banner, BannerText,
    BrandName,
    ImageContainer,
    LandingWrapper,
    ListItem,
    MainHeader,
    Menu, MenuBar, MenuButton, NavBar,
    SubHeaderSection,
    SubHeading
} from "./landing.styles";
import Button from "../button/button.component";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import {NavScroll} from "../../utils/nav-scroll";
import {Link} from "gatsby";

const LandingSection = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        typeof window !== `undefined` ? NavScroll() : console.log();
    })

    const data = useStaticQuery(graphql`
    query {
        coffee: file(relativePath: {eq: "coffee.png"}) {
            id
            childImageSharp {
            fluid(maxWidth: 5000) {
                ...GatsbyImageSharpFluid
      }
    }
  }
}   
    `)
    return (
        <>
            <NavBar>
                <Link to='/'><BrandName>koffee.</BrandName></Link>
                <Menu className='menu' show={toggle}>
                    <Link to='/'><ListItem>Home</ListItem></Link>
                    <Link to='#variety'><ListItem>Our Menu</ListItem></Link>
                    <Link to='#contact'><ListItem>Contact</ListItem></Link>
                </Menu>
                <MenuButton aria-label="Toggle menu" aria-expanded={toggle} open={toggle} onClick={toggleMenu}>
                    <MenuBar/>
                    <MenuBar style={{margin: '7px 0', width: '20px'}}/>
                    <MenuBar/>
                </MenuButton>
            </NavBar>
            <LandingWrapper>
                <SubHeaderSection>
                    <MainHeader>Today's good mood is sponsored by coffee</MainHeader>
                    <SubHeading>Grab a cup of coffee every morning. That’s simply how you ensure a good
                        morning</SubHeading>
                    <Button>Grab a cup</Button>
                </SubHeaderSection>
                <ImageContainer>
                    <Img fluid={data.coffee.childImageSharp.fluid}/>
                </ImageContainer>
                <Banner>
                    <BannerText>koffee.</BannerText>
                </Banner>
            </LandingWrapper>
        </>
    );
};

export default LandingSection;
