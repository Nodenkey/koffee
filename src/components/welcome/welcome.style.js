import styled from "styled-components";


export const WelcomeWrapper = styled.section`
  display: grid;
  height: auto;
  background-color: #DBD7D5;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 50px;
  margin: 100px 0;
  padding-top: 50px;
  .gatsby-image-wrapper img{
  object-position: top !important;
  }
  @media only screen and (min-width: 600px){
    padding-top: 0;
    grid-template-columns: 1fr 1.5fr;
    height: 100vh;
  }
  @media only screen and (max-width: 600px){
    .gatsby-image-wrapper{
    height: 400px;
  }
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5vw;
  @media only screen and (max-width: 600px){
  padding-right: 5vw;
  }
`;