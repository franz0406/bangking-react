import React from 'react';
import styled from 'styled-components';
// components

// css style
import { InnerLayout } from '../styles/Layout';
// images
import cardImg from '../asset/creditcard.svg';

export default function Card(){
    return (
        <CardSection>
            <InnerLayout>
                <div className='card-container'>
                    <div className='card_left'>
                        <h2 className='secondary_heading'>One card for all your payments</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt blanditiis, aliquid magnam perferendis hic suscipit saepe maiores asperiores ad officiis, est accusamus! Vitae, id.</p>
                    </div>
                    <div className='card_right'>
                        <img src={cardImg} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSection>
    )
}

const CardSection = styled.section`
    .card-container {
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        grid-gap:2rem;
        .card_left {
            p {
                padding:1rem 0;
            }
        }
        .card_right {
            display:flex;
            justify-content:flex-end;
            img {
                width:100%;
            }
        }
    }
`;