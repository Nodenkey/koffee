import styled from "styled-components";
import {coffee, HeaderTwo} from "../../utils/elements";


export const DepressoWrapper = styled.section`
  height: auto;
  width: 100vw;
  padding: 100px 5vw 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-row: auto;

  > div:last-of-type {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > .gatsby-image-wrapper {
    height: 400px;
    min-height: 100%;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    > div:last-of-type {
      padding-left: 5vw;
    }

    > .gatsby-image-wrapper {
      height: 550px;
    }
  }
`;

export const SectionTitle = styled(HeaderTwo)`
  color: ${coffee};
  margin-top: 30px;
  margin-bottom: 50px;
  @media only screen and (min-width: 600px) {
    margin-bottom: 80px;
    margin-top: 13px;
  }
`;