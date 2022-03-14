import React from "react";
import styled from 'styled-components';
// image
import arrow from '../asset/arrow.svg';

export default function SecondaryButton({text}){
    return (
        <ButtonStyle>
            {text}
            <img src={arrow} alt="arrow icon"/>
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    padding:0.7rem 2rem;
    background-color: var(--dark-primary);
    border-radius:20px;
    border:none;
    outline:none;
    img {
        padding-left:0.8rem;
    }
`;