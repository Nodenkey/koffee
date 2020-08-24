import React, {useEffect} from 'react';
import {
    CarouselContainer,
    ControlButton,
    ControlContainers,
    ReviewContainer,
    ReviewWrapper
} from "./review.style";
import {HeaderThree} from "../../utils/elements";
import Carousel from "../carousel/carousel.component";
import MainReview from "../main-reveiw/main-review.component";

const Review = () => {

    useEffect(() => {
        const mainPrev = document.querySelector('#prev');
        const mainNext = document.querySelector('#next');
        const allPrev = document.querySelectorAll('.owl-prev');
        const allNext = document.querySelectorAll('.owl-next');

        mainPrev.addEventListener('click', () => {
            console.log('prev');
            allPrev.forEach(el => el.click());
        });
        mainNext.addEventListener('click', () => {
            console.log('next');
            allNext.forEach(el => el.click());
        })
    })
    return (
        <ReviewWrapper>
            <HeaderThree>What some of our customers say</HeaderThree>
            <ReviewContainer>
                <MainReview/>
                <CarouselContainer>
                    <Carousel/>
                </CarouselContainer>
            </ReviewContainer>
            <ControlContainers>
                <ControlButton id='prev'>Previous</ControlButton>
                <ControlButton id='next'>Next</ControlButton>
            </ControlContainers>
        </ReviewWrapper>
    );
};

export default Review;
