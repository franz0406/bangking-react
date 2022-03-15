import React, { Component } from 'react';
// css style
import styled from 'styled-components';

function ChartStats({name, amount}) {
    return (
        <ChartStatsSection>
            <p><b>{name}</b></p>
            <h4>{amount}</h4>
        </ChartStatsSection>
    );
}

const ChartStatsSection = styled.div`
    padding: 2rem;
    width:100%;
    height: 10rem;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22,25,79, 0.05);
    h4 {
        font-size: 3rem;
        color: var(--purple-primary);
    }
    p {
        color: #000;
    }
`;

export default ChartStats;