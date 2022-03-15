import React from 'react';
import styled from 'styled-components';
// image
import arrowImg from '../asset/arrow.svg';
import blobTop from '../asset/blob_top.svg';
import blobBottom from '../asset/blob_bottom.svg';

const AnimatedButton = ({text}) => {
    return (
        <Button>
            {text}
            <img src={arrowImg} alt="arrow" className='arrow'/>
            <img src={blobTop} alt="blob top" className='blob_top'/>
            <img src={blobBottom} alt="blob bottom" className='blob_bottom'/>
        </Button>
    );
};

const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    padding:1rem 2rem;
    background-color: var(--dark-primary);
    border-radius:20px;
    overflow:hidden;
    transition: color 0.4s ease-in-out;
    .arrow {
        padding-left: 0.9rem;
        transition: 0.4s ease-in-out;
    }
    .blob_top, .blob_bottom {
        position: absolute;
        pointer-events: none;
        transition: all 0.4s ease-in-out;
    }
    .blob_top {
        top:0; right:0;
    }
    .blob_bottom {
        bottom:0; left:0;
    }
    &:hover {
        color: var(--accent-pink);
        .blob_top {
            right:calc(100% - 91px);
        }
        .blob_bottom {
            left:calc(100% - 50px);
        }
        .arrow {
            padding-left: 1.4rem;
        }
    }
`;

export default AnimatedButton;