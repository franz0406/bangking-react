import React from "react";
import styled from 'styled-components';

export default function PrimaryButton({text}){
    return (
        <ButtonStyle>
            {text}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    padding:0.7rem 2rem;
    background-color: var(--accent-pink);
    border-radius:20px;
    border:none;
    outline:none;
`;