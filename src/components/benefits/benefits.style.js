import styled from "styled-components";
import {coffee, Container} from "../../utils/elements";


export const BenefitsWrapper = styled.section`
  padding: 50px 5vw 0;
  @media only screen and (min-width: 600px) {
    padding: 100px 5vw 0;
  }
`;

export const BenefitsContainer = styled(Container)`
  display: grid;
  margin-top: 50px;
  justify-content: center;
  grid-template-columns: repeat( auto-fit, minmax(100px, 200px));
  grid-template-rows: auto;
  grid-gap: 50px 100px;
  svg{
  width: 50px;
  height: 50px;
  transition: 300ms ease-in-out;
  }
  svg path, svg circle{
  fill: white;
  }
  >div{
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  p{
  text-align: center;
  }
`;

export const IconContainer = styled.div`
  background-color: ${coffee};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
  svg{
  transform: scale(1.3);
  }
  }
`;