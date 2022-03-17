import React from "react";
import styled from 'styled-components';
// component
import SecondaryButton from './SecondaryButton';
// image
import phone from '../asset/phone.svg';
import ringOrange from '../asset/ring_orange.svg';
import messagePink from '../asset/message_pink.svg';
import messageblue from '../asset/message_blue.svg';

export default function HeaderContent(){
    return (
        <HeaderContentStyled>
            <div className="text_content">
                <div>
                    <h2>Smart Bangking for Freelancers</h2>
                    <p className="white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum suscipit dolores eveniet perferendis aliquid? Non, voluptates omnis, alias incidunt ducimus expedita iste voluptas dolor cumque ipsam unde, adipisci eaque quaerat.</p>
                    <SecondaryButton text={'Register Now'} />
                </div>
            </div>
            <div className="image_content">
                <img src={phone} alt="phone" className="phone"/>
                <img src={ringOrange} alt="" className="ring_orange"/>
                <img src={messagePink} alt="" className="message_pink"/>
                <img src={messageblue} alt="" className="message_blue"/>
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 990px){
        grid-template-columns: repeat(1, 1fr)
    }
    .text_content {
        margin-top:2rem;
        word-break: break-all;
        h2 {
            font-size:4rem;
            font-weight:700;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }
        p {
            text-shadow: 0 0 4px #000;
        }
        .white {
            padding:1.4rem 0;
            line-height:1.8rem;
        }
    }
    .image_content {
        position:relative;
        display:flex;
        justify-content: center;
        @media screen and (max-width: 990px){
            display:none;
        }
        .phone {
            width:100%;
        }
        .ring_orange {
            position:absolute;
            bottom: 10%; right: 0;
            animation: move-x 3.5s linear 0.5s infinite;
        }
        .message_pink {
            position:absolute;
            top: 0; right: 0;
            animation: move-y 5s linear infinite;
        }
        .message_blue {
            position:absolute;
            left: 0; bottom: 15%;
            animation: move-x 4s linear 1s infinite;
        }
    }
    // Animation
    @keyframes move-y {
        from {
            transform: translateY(0) rotate(0) scale(1);
        }
        50% {
            transform: translateY(-20px) rotate(10deg) scale(1.4);
        }
        100% {
            transform: translateY(0) rotate(0) scale(1);
        }
    }
    @keyframes move-x {
        from {
            transform: translateX(0) rotate(0) scale(1);
        }
        50% {
            transform: translateX(-20px) rotate(20deg) scale(1.2);
        }
        100% {
            transform: translateX(0) rotate(0) scale(1);
        }
    }

`