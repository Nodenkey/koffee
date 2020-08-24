import styled from "styled-components";
export const coffee = '#6F4E37';

export const typeScale = {
    headerOne: '4.209rem',
    headerTwo: '3.157rem',
    headerThree: '2.369rem',
    headerFour: '1.777rem',
    headerFive: '1.333rem',
    paragraph: '1rem',
    subtext: '0.75rem',
}

export const HeaderOne = styled.h1`
  font-size: ${typeScale.headerOne};
  font-weight: 800;
`;

export const HeaderTwo = styled.h2`
  font-size: ${typeScale.headerTwo};
  font-weight: 700;
  line-height: 140%;
`;

export const HeaderThree = styled.h3`
  font-size: ${typeScale.headerThree};
  font-weight: 600;
  line-height: 140%;
`;

export const HeaderFour = styled.h4`
  font-size: ${typeScale.headerFour};
  font-weight: 500;
`;

export const HeaderFive = styled.h5`
  font-size: ${typeScale.headerFive};
  font-weight: 400;
`;

export const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
  line-height: 200%;
  font-weight: 400;
`;

export const SubText = styled.p`
  font-size: ${typeScale.subtext};
  font-weight: 400;
`;

export const Container = styled.div``;