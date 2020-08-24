import React from 'react';
import {DepressoWrapper, SectionTitle} from "./depresso.style";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import {Container, Paragraph} from "../../utils/elements";

const Depresso = () => {

    const data = useStaticQuery(graphql`
        query {
            depresso: file(relativePath: {eq: "depresso.jpg"}) {
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
        <DepressoWrapper>
            <Img fluid={data.depresso.childImageSharp.fluid}/>
            <Container>
                <SectionTitle>Depresso.</SectionTitle>
                <Paragraph>(adj.) the feeling you get when you’ve ran out of coffee.</Paragraph>
                <Paragraph>Example: Make sure you never get to be depresso. Grab a cup from koffee.</Paragraph>
            </Container>
        </DepressoWrapper>
    );
};

export default Depresso;
