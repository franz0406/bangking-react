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
    .text_content {
        margin-top:2rem;
        h2 {
            font-size:4rem;
            font-weight:700;
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
        .phone {
            width:80%;
        }
        .ring_orange {
            position:absolute;
            bottom: 10%; right: 0;
        }
        .message_pink {
            position:absolute;
            top: 0; right: 0;
        }
        .message_blue {
            position:absolute;
            left: 0; bottom: 15%;
        }
    }
`;