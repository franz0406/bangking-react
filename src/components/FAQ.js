import React, { useEffect, useState } from 'react';
// css style
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
// component
import Question from './Question';
// db component
import Questions from '../db/Questions';

const FAQ = () => {
    return (
        <FaqSection>
            <InnerLayout>
                <h3 className="small_heading">Frequently <span>asked questions</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum officiis ratione ipsam commodi, qui architecto modi dolore dolor. Ad aspernatur molestias iste alias omnis! Cum eos veritatis corporis. Illum, aperiam corporis?</p>
                <div className="questions_container">
                    {Questions.map( q => {
                        return <Question key={q.id} title={q.title} desc={q.description}/>
                    })}
                </div>
            </InnerLayout>
        </FaqSection>
    );
};

const FaqSection = styled.section`
    p {
        margin: 0 auto;
        width: 60%;
        text-align: center;
    }
    .questions_container {
        padding-top: 4rem;
    }
`

export default FAQ;