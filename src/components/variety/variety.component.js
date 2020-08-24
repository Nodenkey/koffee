import React from 'react';
import {VarietyContainer, VarietyHeader, VarietyWrapper} from "./variety.style";
import Card from "../card/card.component";
import {coffeeList} from "../../utils/coffee-list";

const Variety = () => {
    return (
        <VarietyWrapper  id='variety'>
            <VarietyHeader>We offer a variety of coffee</VarietyHeader>
            <VarietyContainer>
                {
                    coffeeList.map((item) =>
                        <Card text={item.description} title={item.name} key={item.key}/>
                    )
                }
            </VarietyContainer>
        </VarietyWrapper>
    );
};

export default Variety;
