import React from 'react';
import {BeansWrapper} from "./beans.style";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import {SectionTitle} from "../depresso/depresso.style";
import {Container, Paragraph} from "../../utils/elements";

const Beans = () => {


    const data = useStaticQuery(graphql`
        query {
            beans: file(relativePath: {eq: "beans.jpg"}) {
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
        <BeansWrapper>
            <Container>
                <SectionTitle>Our beans are the best in the world!</SectionTitle>
                <Paragraph>Yes, we just said that. Our beans come from the place known as the birthplace of coffee;
                    Ethiopia, which is known for its Harrar variety of the coffee beans. We don't spare any expense in
                    ensuring you get the best coffee the world has to offer.
                </Paragraph>
            </Container>
            <Img fluid={data.beans.childImageSharp.fluid}/>
        </BeansWrapper>
    );
};

export default Beans;
