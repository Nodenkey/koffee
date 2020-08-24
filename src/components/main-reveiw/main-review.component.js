import React from 'react';
import {MainReviewWrapper, ReviewContent} from "./main-review.style";
import {coffee, Container, HeaderFive, Paragraph} from "../../utils/elements";
import OwlCarousel from "react-owl-carousel";
import {reviewList} from "../../utils/review-list";

const MainReview = () => {

    const options = {
        loop: true,
        margin: 100,
        items: 1,
        autoplay: true,
        autoplayTimeout: 15000,
        dots: false,
    };
    return (
        <MainReviewWrapper>
            {
                typeof window !== `undefined` ?
                    <OwlCarousel {...options} className="owl-theme" id="owl-one">
                        {
                            reviewList.map((review) =>
                                <Container key={review.key} style={{marginTop: '100px'}}>
                                    <HeaderFive>{review.name}</HeaderFive>
                                    <Paragraph style={{color: `${coffee}`}}>{review.occupation}</Paragraph>
                                    <ReviewContent>{review.review}</ReviewContent>
                                </Container>
                            )
                        }
                    </OwlCarousel> : null
            }
        </MainReviewWrapper>

    );
};

export default MainReview;
