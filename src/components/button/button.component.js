import React from 'react';
import {StyledButton} from "./button.style";
import Link from "gatsby-link";

const Button = ({children}) => {
    return (
        <Link to='#location'><StyledButton>
            {children}
        </StyledButton>
        </Link>
    );
};

export default Button;
