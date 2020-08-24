import styled from "styled-components";
import {Paragraph} from "../../utils/elements";


export const MainReviewWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50%;
  padding: 0 5vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 600px){
    margin-top: 0;
  }
`;

export const ReviewContent = styled(Paragraph)`
  margin-top: 30px;
`;