import React from 'react';
import {SectionTitle} from "../depresso/depresso.style";
import Img from "gatsby-image/index";
import {Container, Paragraph} from "../../utils/elements";
import {graphql, useStaticQuery} from "gatsby";
import {ExperienceWrapper} from "./experience.style";

const Experience = () => {

    const data = useStaticQuery(graphql`
        query {
            experience: file(relativePath: {eq: "experience.jpg"}) {
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
        <ExperienceWrapper>
            <Img fluid={data.experience.childImageSharp.fluid}/>
            <Container>
                <SectionTitle>Have the best coffee experience with us.</SectionTitle>
                <Paragraph>Our shop offers a wide range of coffee products to satisfy all your coffee needs. We have the
                    best staff on the planet earth who are always eager to add to the spark our brewed coffee beans
                    gives. Just drop in anytime to have you day koffeed!
                </Paragraph>
            </Container>
        </ExperienceWrapper>
    );
};

export default Experience;
