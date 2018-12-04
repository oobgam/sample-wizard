import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: lightsalmon;
    color: white;
    padding: 0.5rem 0.75rem;
    border: 0;
    font-size: 1rem;
    border-radius: 0.25rem;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: HSL(17, 100%, 52%);
    }
`

export default Button;