import styled from "styled-components";
import {coffee, HeaderFive, HeaderTwo, Paragraph} from "../../utils/elements";

export const LandingWrapper = styled.main`
  width: 100vw;
  display: grid;
  padding: 100px 5vw 30px;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  @media only screen and (min-width: 1200px) {
    padding: 30px 5vw 30px;
    height: 100vh;
    grid-template-columns: 1fr 1.5fr .2fr;
    grid-template-rows: auto;
    grid-template-areas: 
  'sub image banner'
  ;
  }

  .gatsby-image-wrapper {
    height: 90vh;

    img {
      height: 100% !important;
      width: auto !important;
    }
  }
`;

export const MenuButton = styled.div`
  margin-right: 5vw;
  height: fit-content;

  > div:first-child {
    transform: ${({open}) => open ? 'rotate(46deg) translateY(15px)' : 'rotate(0) translateY(0)'};
  }

  > div:nth-child(2) {
    opacity: ${({open}) => open ? '0' : '1'};
    transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
  }

  > div:nth-child(3) {
    transform: ${({open}) => open ? 'rotate(-46deg) translateY(-14px)' : 'rotate(0)'};
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }
`
export const MenuBar = styled.div`
  width: 30px;
  height: 3px;
  background-color: black;
  transition: all 0.3s linear;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 5vw;
  z-index: 10;
  transition: 500ms ease-in-out;

  a {
    text-decoration: none;
  }
`;

export const BrandName = styled(HeaderFive)`
  font-weight: 600;
  cursor: pointer;
  color: ${coffee};
`;

export const Menu = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  margin: 0;
  padding: 30px 0;
  z-index: -1;
  background-color: #f1ece8;
  list-style: none;
  display: flex;
  flex-direction: column;
  transition: 500ms ease-in-out;
  transform: ${props => props.show ? 'translateY(80px)' : 'translateY(-200px)'};

  a {
    color: black;
  }

  @media only screen and (min-width: 600px) {
    transform: none;
    position: initial;
    width: auto;
    background-color: initial;
    padding: 0;
  }
`;

export const ListItem = styled.li`
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: ${coffee};
  }

  @media only screen and (min-width: 600px) {
    text-align: right;
  }
`;

export const MainHeader = styled(HeaderTwo)`
  line-height: 140%;
`;

export const SubHeaderSection = styled.div`
  grid-area: sub;
`;

export const SubHeading = styled(Paragraph)`
  margin: 2rem 0;
`;

export const ImageContainer = styled.div`
  grid-area: image;
  @media only screen and (max-width: 1200px) {
    .gatsby-image-wrapper {
      opacity: .15;
      top: -80px;
    }
  }
`;

export const Banner = styled.div`
  display: none;
  padding: 10px 50px;
  grid-area: banner;
  background-color: ${coffee};
  width: fit-content;
  height: fit-content;
  transform: rotate(90deg) translateY(-140%);
  align-self: center;
  @media only screen and (min-width: 1200px) {
    display: inline-block;
  }
`;

export const BannerText = styled(HeaderFive)`
  color: white;
`;