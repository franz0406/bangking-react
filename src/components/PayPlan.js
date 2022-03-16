import React from 'react';
import styled from 'styled-components';

const PayPlan = ({
        account, amount, desc, buttonText, cardImg, active, inactive, check, disabled, 
        text1, text2, text3, text4, text5, text6, text7, text8 
    }) => {

    return (
        <PayPlanStyle>
            <h3 className='card_title'>{account}</h3>
            <h4 className='card_title'>{amount} <span>/m</span></h4>
            <p>{desc}</p>
            <button>{buttonText}</button>
            <img src={cardImg} alt="" className='card_img'/>
            <div className="plan_container">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <div className="lists">
                <figure className='text_check'>
                    <img src={check} alt="" />
                    <figcaption>{text1}</figcaption>
                </figure>
                <figure className='text_check'>
                    <img src={check} alt="" />
                    <figcaption>{text2}</figcaption>
                </figure>
                <figure className='text_check'>
                    <img src={check} alt="" />
                    <figcaption>{text3}</figcaption>
                </figure>
                <figure className='text_check'>
                    <img src={check} alt="" />
                    <figcaption>{text4}</figcaption>
                </figure>
                <figure className='text_check'>
                    <img src={check} alt="" />
                    <figcaption>{text5}</figcaption>
                </figure>
                <figure className='text_check'>
                    <img src={disabled} alt="" />
                    <figcaption>{text6}</figcaption>
                </figure>
                <figure className='text_check'>
                    <img src={disabled} alt="" />
                    <figcaption>{text7}</figcaption>
                </figure>
                <figure className='text_check'>
                    <img src={disabled} alt="" />
                    <figcaption>{text8}</figcaption>
                </figure>
            </div>
        </PayPlanStyle>
    );
};

const PayPlanStyle = styled.div`
    padding: 3rem 4rem;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .card_title {
        font-size: 2.5rem;
        color: var(--dark-primary);
        padding: 1.5rem 0;
        span {
            font-size: 1.5rem;
            color: var(--accent-pink);
        }
    }
    button {
        margin: 1.5rem 0;
        border: 2px solid var(--dark-primary);
        padding: 0.8rem 1.4rem;
        background-color: transparent;
        border-radius: 20px;
        color: var(--dark-primary);
        font-size: inherit;
    }
    .card_img {
        width:70%;
    }
    .plan_container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 0;
        img {
            padding: 0 0.3rem;
        }
    }
    .lists {
        figure {
            display: flex;
            align-items: center;
            padding: 0.4rem 0;
            img {
                width: 24px;
                padding-right: 0.3rem;
            }
            figcaption {
                text-align: left;
                color: var(--dark-primary);
            }
            &:nth-child(n+6) figcaption {
                color: #b7b7b7;
            }
        }
    }
`

export default PayPlan;