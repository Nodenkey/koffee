import styled from "styled-components";
import {coffee, HeaderFour, Paragraph} from "../../utils/elements";

export const CardWrapper = styled.div`
  min-height: 400px;
  width: 350px;
  padding: 60px 50px;
  border-radius: 8px;
  position: relative;
  background: #f1ece8;
  box-shadow:  23px 23px 42px #e7e3df, 
             -23px -23px 42px #fbf5f1;
`;

export const CardTag = styled.div`
  position: absolute;
  background-color: ${coffee};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: -50px;
  right: calc(50% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  >svg *{
  fill: white !important;
  }
  >svg{
    width: 50px;
  }
`;

export const CardTitle = styled(HeaderFour)`
  font-weight: 600;
  text-align: center;
`;

export const CardText = styled(Paragraph)`
  margin-top: 50px;
`;