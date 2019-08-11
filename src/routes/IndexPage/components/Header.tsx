import * as React from 'react';
import styled from 'styled-components';
import * as logoIcon from '../assets/ic_cc_show.png';

const Header = styled.header`
    z-index: 100;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;

    ${(props: { shadow?: boolean }) => props.shadow && `
        background-color: white;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    `}
  
    & ul {
        list-style-type: none;
        margin: 0;
        padding: 0 20px;
        overflow: hidden;
    }
`

const TitleIcon = styled.img`
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    height: 1.6em;
    margin: calc(30px - 0.3em) 16px;
`

const HeaderComponent: React.FC = () => {
    return (
        <Header>
            <ul>
                <li><TitleIcon src={logoIcon} /></li>
            </ul>
        </Header>
    )
}

export default HeaderComponent;