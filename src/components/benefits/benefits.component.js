import React from 'react';
import {BenefitsContainer, BenefitsWrapper, IconContainer} from "./benefits.style";
import {Container, HeaderTwo, Paragraph} from "../../utils/elements";
import {Boost, Brain, Cancer, Focus} from "../svg/scalors.component";

const Benefits = () => {
    return (
        <BenefitsWrapper>
            <HeaderTwo style={{textAlign: 'center'}}>Some benefits of coffee</HeaderTwo>
            <BenefitsContainer>
                <Container>
                    <IconContainer>
                        <Boost/>
                    </IconContainer>
                    <Paragraph>Coffee boosts your physical performance</Paragraph>
                </Container>
                <Container>
                    <IconContainer>
                        <Focus/>
                    </IconContainer>
                    <Paragraph>Coffee helps you stay alert and focus</Paragraph>
                </Container>
                <Container>
                    <IconContainer>
                        <Cancer/>
                    </IconContainer>
                    <Paragraph>Coffee reduces risk of cancers</Paragraph>
                </Container>
                <Container>
                    <IconContainer>
                        <Brain/>
                    </IconContainer>
                    <Paragraph>Coffee protects your brain</Paragraph>
                </Container>
            </BenefitsContainer>
        </BenefitsWrapper>
    );
};

export default Benefits;
