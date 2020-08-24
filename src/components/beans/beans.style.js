import styled from "styled-components";



export const BeansWrapper = styled.section`  
   height: auto;
  width: 100vw;
  padding: 100px 5vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-row: auto;
   >div:first-of-type{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  }
   >.gatsby-image-wrapper{
  height: 400px;
  }
  @media only screen and (min-width: 600px){
   >.gatsby-image-wrapper{
  height: 550px;
  }
  grid-template-columns: 1fr 1fr;
  }
`;