import React from 'react';
import {CopyrightSection, FooterWrapper, MainFooter, MyLink, SocialLink} from "./footer.style";
import {Container, HeaderFive, HeaderThree, Paragraph} from "../../utils/elements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";


const d = new Date();
const currentYear = d.getFullYear();

const Footer = () => {
    return (
        <FooterWrapper id='contact'>
            <MainFooter>
                <Container>
                <HeaderThree>You can reach me via mail or my social media handles</HeaderThree>
                    <SocialLink href='https://web.facebook.com/nii.o.abbey' rel='noopener' target='_blank'><FontAwesomeIcon icon={faFacebookF}/></SocialLink>
                    <SocialLink href='https://twitter.com/nii_odenkey_' rel='noopener' target='_blank'><FontAwesomeIcon icon={faTwitter}/></SocialLink>
                    <SocialLink href='https://www.instagram.com/n_odenkey/' rel='noopener' target='_blank'><FontAwesomeIcon icon={faInstagram}/></SocialLink>
                    <SocialLink href="mailto:nodenkey@gmail.com" rel='noopener' target='_blank'><FontAwesomeIcon icon={faEnvelope}/></SocialLink>
                </Container>
                <Container style={{marginTop: '5px'}}>
                    <HeaderFive style={{fontWeight: 'bold', textAlign: 'right'}}>Visit my website via</HeaderFive>
                    <SocialLink href="https://niiodenkey.me/" rel='noopener' target='_blank'><Container style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}><FontAwesomeIcon icon={faGlobe}/>niiodenkey.me</Container></SocialLink>
                </Container>
            </MainFooter>
            <CopyrightSection>
                <Paragraph>&copy; Copyright {currentYear}, Nii Odenkey Abbey | All rights reserved.</Paragraph>
                <Paragraph>Video on website: <MyLink href='https://www.youtube.com/watch?v=lAd3LYIZMjs' target='_blank'
                                                     rel="noopener">COFFEE B ROLL - Daniel Schiffer
                    Inspired</MyLink></Paragraph>
            </CopyrightSection>
        </FooterWrapper>
    );
};

export default Footer;
