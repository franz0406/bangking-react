import React from 'react';
// css style
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
// image
import logo from '../asset/logo.svg';

const Footer = () => {
    const lists = [
        ["Team", "Press", "Fees"],
        ["Services", "Projects", "Affiliate"],
        ["Terms of use", "Privacy Policy", "Contact us"]
    ]
    return (
        <FooterSection>
            <InnerLayout>
                <div className="footer_container">
                    <div className="logo_container">
                        <div>
                            <img src={logo} alt="logo image" />
                            <p>Copyright @2022 Portfolio.</p>
                        </div>
                    </div>
                    <nav className="bottom_nav">
                        {lists.map((list, idx)=>{
                            return (
                                <ul className='links' key={idx}>
                                    {list.map((item, idx)=>{
                                        return (
                                            <li key={idx}><a href="#">{item}</a></li>
                                        )
                                    })}
                                </ul>
                            )
                        })}
                    </nav>
                </div>
            </InnerLayout>
        </FooterSection>
    );
};

const FooterSection = styled.footer`
    padding: 0 18rem;
    background-color: #dce2f0;
    @media screen and (max-width: 1340px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1180px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    .footer_container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 990px){
            grid-template-columns: repeat(1, 1fr)
        }
        .logo_container {
            display: flex;
            align-items:center;
            @media screen and (max-width: 990px){
                display: none;
            }
            img {
                width: 90px;
            }
        }
        .bottom_nav {
            display: flex;
            justify-content: space-between;
            .links {
                li {
                    padding: 2rem 0;
                    color: var(--dark-primary);
                    
                }
            }
        }
    }
`

export default Footer;