import React, {useEffect, useRef} from 'react';
import {Video, VideoContainer} from "./video-section.style";
import CoffeeVideo from "../../video/coffee_video.mp4";
import CoffeeVideo2 from "../../video/coffee_video.webm";
import PlaceholderCoffee from "../../images/poster.jpg";

const VideoSection = () => {
    let video = useRef(null);
    useEffect(() => {
        video.play();
    })
    return (
        // <VideoContainer>
        //     <Video
        //         src="https://www.youtube.com/embed/lAd3LYIZMjs?autoplay=1&controls=0&loop=1&rel=0&mute=1&color=white&iv_load_policy=3&playlist=lAd3LYIZMjs"
        //         title="Coffee video"
        //         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        //         frameBorder="0"
        //         webkitallowfullscreen="true"
        //         mozallowfullscreen="true"
        //         allowFullScreen
        //         loading="lazy"
        //     />
        // </VideoContainer>
        <VideoContainer>
            <Video loop loading="lazy" muted ref={el => video = el} poster={PlaceholderCoffee}>
                <source src={CoffeeVideo} type="video/mp4"/>
                <source src={CoffeeVideo2} type="video/webm"/>
                Your browser does not support the video tag.
            </Video>
        </VideoContainer>
    );
};

export default VideoSection;
