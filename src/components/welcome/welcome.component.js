import React from 'react';
import {WelcomeContainer, WelcomeWrapper} from "./welcome.style";
import {coffee, HeaderFour, HeaderTwo, Paragraph} from "../../utils/elements";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image/index";

const Welcome = () => {

    const data = useStaticQuery(graphql`
        query {
            beans: file(relativePath: {eq: "welcome.jpg"}) {
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
        <WelcomeWrapper>
            <WelcomeContainer>
                <HeaderTwo style={{color: `${coffee}`}}>You are always welcome to koffee.</HeaderTwo>
                <Paragraph style={{marginTop: '30px'}}>Haven't had your coffee yet? Better <span style={{color: `${coffee}`}}>latte</span> than never!</Paragraph>
                <HeaderFour style={{marginTop: '30px'}}>We are open 24/7</HeaderFour>
            </WelcomeContainer>
            <Img fluid={data.beans.childImageSharp.fluid}/>
        </WelcomeWrapper>
    );
};

export default Welcome;
