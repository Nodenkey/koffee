import styled from "styled-components";
import {coffee} from "../../utils/elements";

export const FooterWrapper = styled.section`
  width: 100vw;
  padding: 100px 5vw 50px;
`;

export const CopyrightSection = styled.div`
  display: flex;
  flex-direction: column;
  p:first-of-type{
  margin-bottom: 50px;
  }
  @media only screen and (min-width: 600px){
  flex-direction: row;
  justify-content: space-between;
  p{
  margin-bottom: 0 !important;
  }
  }
`;

export const MainFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-bottom: 100px;
  align-items: center;
 @media only screen and (max-width: 600px){
  margin-bottom: 50px;
  >div:nth-of-type(2){
  margin-top: 50px !important;
  h5{
  text-align: left !important;
  }
  div{
  justify-content: flex-start !important;
  }
  }
 }
  svg{
  width: 40px !important;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  &:hover path{
  fill: ${coffee}
  }
  }
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr;
  }
`;

export const MyLink = styled.a`
  color: ${coffee};
`;

export const SocialLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover{
  color: ${coffee};
  }
`;