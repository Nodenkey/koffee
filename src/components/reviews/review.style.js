import styled from "styled-components";
import {coffee} from "../../utils/elements";

export const ReviewWrapper = styled.section`
  width: 100vw;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  h3{
  display: inline-block;
  position: absolute;
  top: 10%;
  left: 5vw;
  color: ${coffee};
  max-width: 400px;
  @media only screen and (min-width: 600px){
    top: 19%;
    left: auto;
    right: 5vw;
  }
  }
`;

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  height: 100%;
  width: 100%;
  @media only screen and (min-width: 600px){
    grid-template-columns: .7fr 1fr;
  }
`;


export const CarouselContainer = styled.div`
  overflow: hidden;
`;

export const ControlContainers = styled.div`
  display: flex;
  width: 150px;
  position: absolute;
  bottom: 0;
  left: 5vw;
  justify-content: space-between;
  @media only screen and (min-width: 600px){
    width: 200px;
  }
`;

export const ControlButton = styled.p`
  cursor: pointer;
  &:hover{
  font-weight: bold;
  color: ${coffee};
  }
`;

