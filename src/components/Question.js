import React, { useState } from 'react';
import styled from 'styled-components';
// image
import plusImg from '../asset/plus.svg';
import minusImg from '../asset/minus.svg';

const Question = ({title, desc}) => {
    const [toggle, setToggle] = useState(false);
    const btnToggler = ()=>{
        setToggle(!toggle);
    };
    return (
        <QuestionStyled>
            <div className="question_container">
                <div className="toggle_title">
                    <h4>{title}</h4>
                    <button onClick={btnToggler}>                        
                        {toggle 
                            ? <img src={minusImg} alt="close"/> 
                            : <img src={plusImg} alt="open" />
                        }
                    </button>
                </div>
                {toggle ? <p className='desc'>{desc}</p> : null}
            </div>
        </QuestionStyled>
    );
};
const QuestionStyled = styled.div`
    padding: 2rem 2rem;
    margin: 1rem 0;
    background-color: #fff;
    border-radius: 30px;
    .toggle_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h4 {
            font-size: 1.3rem;
            color: var(--dark-primary);
        }
        button {
            background-color: transparent;
            width:30px; height: 30px;     
            img {
                width: 100%; height: 100%;
            }       
        }
    }
    p.desc {
        margin:0;
        width: 100%;
        text-align: left;
    }
`

export default Question;