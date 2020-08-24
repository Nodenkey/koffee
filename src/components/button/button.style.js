import styled from "styled-components";
import {coffee} from "../../utils/elements";


export const StyledButton = styled.button`
  background-color: ${coffee};
  color: white;
  padding: 20px 30px;
  border: none;
  cursor: pointer;
  &:active, &:focus{
  outline: none;
  }
  &:hover{
  background-color: #8c6650;
  }
`;