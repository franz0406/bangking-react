import React from "react";
// css style
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
// components
import ChartStats from "./ChartStats";
import AnimatedButton from "./AnimatedButton";
// image
import chartImg from '../asset/chart.svg';

export default function Chart(){
    return (
        <ChartSection>
            <InnerLayout>
                <div className="chart__container">
                    <div className="chart__left">
                        <div className="stats">
                            <div className="stats__price">
                                <ChartStats name={'Balance'} amount={'$5,600'} />
                                <ChartStats name={'Last Transaction'} amount={'$230'} />
                            </div>
                            <img src={chartImg} alt="chart image" />
                        </div>
                    </div>
                    <div className="chart__right">
                        <h2 className="secondary_heading">
                            Manage your finances like a pro in no time
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus, aperiam nihil eius culpa aut architecto nam esse veritatis necessitatibus veniam quasi assumenda quas natus?</p>
                        <AnimatedButton text={'Learn More'}/>
                    </div>
                </div>
            </InnerLayout>
        </ChartSection>
    );
};

const ChartSection = styled.section`
    .chart__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 990px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart__left {
            .stats {
                img {
                    width:100%;
                    box-shadow: 0px 25px 50px rgba(22,25,79, 0.05);
                    border-radius: 62px;
                }
                .stats__price {
                    display:flex;
                    padding-bottom:1.3rem;
                    div:first-child {
                        margin-right:1rem;
                    }
                }
            }
        }
        .chart__right {
            padding-left: 2rem;
            p {
                padding: 1.3rem 0;
            }
        }
    }
`;
