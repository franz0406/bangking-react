import React from 'react';
import styled from 'styled-components';
// components
import Navigation from './Navigation';
// images
import backgroundImage from '../asset/bg.svg';

export default function Header(){
    return (
        <HeaderSection>
            <Navigation />
        </HeaderSection>
    )
}

const HeaderSection = styled.header`
    padding:0 10rem;
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position-y: 100%;
    background-size: cover;
`;