import React from 'react';
import {CardTag, CardText, CardTitle, CardWrapper} from "./card.style";
import {Cup} from "../svg/scalors.component";

const Card = ({title, text}) => {
    return (
        <CardWrapper>
            <CardTag><Cup/></CardTag>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
        </CardWrapper>
    );
};

export default Card;
