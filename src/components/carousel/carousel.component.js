import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import {graphql, useStaticQuery} from "gatsby";
import {CarouselImageWrapper, ImageCarousel} from "./carousel.style";
import Img from "gatsby-image";


const Carousel = () => {

    const data = useStaticQuery(graphql`
  query ClientQuery {
  images: allFile(filter: {relativeDirectory: {eq: "review"}}) {
    nodes {
      id
      childImageSharp {
        fluid(maxWidth: 5000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}  
   }
  `)

    const options = {
        loop: true,
        margin: 100,
        items: 4,
        autoplay: true,
        autoplayTimeout: 15000,
        dots: false,
        responsive: {
            0: {
                items: 1,
                center: true,
                margin: 10
            },
            768: {
                items: 2.5,
            },
            1000: {
                items: 2.5,
            },
        },
    };
    return (
        typeof window !== `undefined` ?
            <ImageCarousel>
                <OwlCarousel {...options} className="owl-theme" id="carousel-wrapper">
                    {
                        data.images.nodes.map((image) =>
                            <CarouselImageWrapper className='item' key={image.id}>
                                <Img fluid={image.childImageSharp.fluid} alt='reviewer'/>
                            </CarouselImageWrapper>
                        )
                    }
                </OwlCarousel>
            </ImageCarousel>
            : <></>
    );
};

export default Carousel;
