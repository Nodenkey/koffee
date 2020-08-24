import styled from "styled-components";
import {HeaderTwo} from "../../utils/elements";


export const VarietyWrapper = styled.section`
  padding: 100px 5vw 0;
`;

export const VarietyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, 350px );
  grid-template-rows: auto;
  grid-gap: 100px 50px;
  justify-content: center;
`;

export const VarietyHeader = styled(HeaderTwo)`
  text-align: center;
  margin-bottom: 100px;
  @media only screen and (min-width: 600px){
  margin-bottom: 150px;
  }
`;