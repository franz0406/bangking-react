import React from "react";
import styled from 'styled-components';
// component
import PrimaryButton from './PrimaryButton';
// image
import logo from '../asset/logo.svg';

export default function Navigation(){
    return (
        <Nav>
            <h1 className="logo">
                <a href="#"><img src={logo} alt="logo image" /></a>
            </h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
            <PrimaryButton text={'Sign Up'}/>
        </Nav>
    )
}

const Nav = styled.nav`
    padding-top:2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;

    ul {        
        display: flex;
        justify-content: space-between;
        li {
            margin:0 1rem;
            a {
                transition: color 0.3s;
                &:hover{
                    color: var(--dark-primary);
                }
            }
        }
    }
`;