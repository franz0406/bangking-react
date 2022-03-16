import React from 'react';
// css style
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
// component
import PayPlan from './PayPlan';
// image
import cardImg from '../asset/creditcard.svg';
import active from '../asset/active.svg';
import inactive from '../asset/inactive.svg';
import check from '../asset/check.svg';
import disabled from '../asset/check-disabled.svg';

const Payment = () => {
    return (
        <PaymentSection>
            <InnerLayout>
                <h3 className="small_heading">An exceptional service, <span>at the right price</span></h3>
                <p>Start with our free plan and switch to premium as you grow.</p>
                <div className="card_container">
                    <PayPlan 
                        account={'Free'}
                        amount={'$0'}
                        desc={'Manage your business with a simple and efficient account.'}
                        buttonText={'Get Started'}
                        cardImg={cardImg}
                        active={active}
                        inactive={inactive}
                        check={check}
                        disabled={disabled}
                        text1={'10 free local transfers'}
                        text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                        text3={'Free payments to other Draft accounts'}
                        text4={'Prepaid debit cards'}
                        text5={'Virtual cards'}
                        text6={'Priority 24/7 support'}
                        text7={'Exchange 24 currencies'}
                        text8={'Multi-user access'}
                    />
                    <PayPlan 
                        account={'Premium'}
                        amount={'$10'}
                        desc={'Manage your business with a simple and efficient account.'}
                        buttonText={'Get Started'}
                        cardImg={cardImg}
                        active={active}
                        inactive={inactive}
                        check={check}
                        disabled={disabled}
                        text1={'10 free local transfers'}
                        text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                        text3={'Free payments to other Draft accounts'}
                        text4={'Prepaid debit cards'}
                        text5={'Virtual cards'}
                        text6={'Priority 24/7 support'}
                        text7={'Exchange 24 currencies'}
                        text8={'Multi-user access'}
                    />
                </div>
            </InnerLayout>
        </PaymentSection>
    );
};

const PaymentSection = styled.section`
    text-align: center;
    .card_container {
        padding-top: 7rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }
`

export default Payment;