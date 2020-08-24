import styled from "styled-components";


export const ImageCarousel = styled.div`
  .owl-item{
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
  }
  .owl-stage{
  >.active{
  filter: grayscale(0);
  height: 100vh;
  .gatsby-image-wrapper{
  height: 60vh;
  }
  @media only screen and (min-width: 600px){
  .gatsby-image-wrapper{
  height: 90vh;
  }
  }
  }
  >.active ~ .active{
    filter: grayscale(1);
    .gatsby-image-wrapper{
      height: auto;
  }
  }
  }
`;
export const CarouselImageWrapper = styled.div`
`;