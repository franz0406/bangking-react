import React from 'react';
// css style
import { InnerLayout } from '../styles/Layout';
import styled from 'styled-components';
// images
import avatar1 from '../asset/avatar1.svg';
import avatar2 from '../asset/avatar2.svg';
import avatar3 from '../asset/avatar3.svg';
import avatar4 from '../asset/avatar4.svg';
import avatar5 from '../asset/avatar5.svg';
import messageImg from '../asset/conversation.svg';
import bgCircle from '../asset/circleBg.svg';

const Messaging = () => {
    return (
        <MessaginSection>
            <InnerLayout>
                <div className="message_container">
                    <div className="items_left">
                        <h2 className="secondary_heading">We support you in 6 different languages</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus debitis dicta neque totam velit, quidem aliquam iure excepturi, praesentium pariatur unde cupiditate!</p>
                        <div className="avatar_images">
                            <img src={avatar1} alt="avatar image 1" className='avatar_1' />
                            <img src={avatar2} alt="avatar image 2" className='avatar_2' />
                            <img src={avatar3} alt="avatar image 3" className='avatar_3' />
                            <img src={avatar4} alt="avatar image 4" className='avatar_4' />
                            <img src={avatar5} alt="avatar image 5" className='avatar_5' />
                            <p>&nbsp;&nbsp;+25</p>
                        </div>
                        <img src={bgCircle} alt="background circle image" className='bg_circle'/>
                    </div>
                    <div className="items_right">
                        <img src={messageImg} alt="conversation message" />
                        <img src={bgCircle} alt="background circle image" className='bg_circle'/>
                    </div>
                </div>
            </InnerLayout>            
        </MessaginSection>
    );
};

const MessaginSection = styled.section`
    .message_container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 990px){
            grid-template-columns: repeat(1, 1fr);
        }
        .items_left {
            position: relative;
            padding-right:2rem;
            > p {
                padding: 2rem 0;
            }
            .avatar_images {
                display: flex;
                align-items: center;
                img:not(:first-of-type) {
                    margin-left: -20px;
                }
            }
            .bg_circle {
                position: absolute;
                top: -10%; left: -10%;
                z-index: -1;
            }
        }
        .items_right {
            position: relative;
            img {
                padding-left: 2rem;
            }
            .bg_circle {
                position: absolute;
                bottom: -10%; right: -10%;
                z-index: -1;
            }
        }
    }
`;

export default Messaging;