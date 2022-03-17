import React from 'react';
import styled from 'styled-components';
// components
import Navigation from './Navigation';
import HeaderContent from './HeaderContent';
// images
import backgroundImage from '../asset/bg.svg';

export default function Header(){
    return (
        <HeaderSection>
            <Navigation />
            <HeaderContent />
        </HeaderSection>
    )
}

const HeaderSection = styled.header`
    width: 100%;
    height: 100vh;
    padding:0 18rem;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position-y: 100%;
    background-size: cover;
    @media screen and (max-width: 1340px){
        padding: 0rem 14rem;
    }
    @media screen and (max-width: 1180px){
        padding: 0rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 0rem 4rem;
    }
`;