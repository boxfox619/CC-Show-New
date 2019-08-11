import styled from 'styled-components';
import * as rightArrowIcon from '../../assets/ic_right_arrow_black.png';

export const MenuContainer = styled.div`
    position: fixed;
    background: #F2F2F2;
    box-shadow: 0px 2px 10px #999999;
    border-radius: 10px;
    z-index: 100;
    color: black !important;
    ${(props: {left?: number, top?: number, visible: boolean}) => `
        ${props.left ? `left: ${props.left}px;` : ''}
        ${props.top ? `top: ${props.top}px;` : ''}
        display: ${props.visible ? 'block' : 'none'};
    `}
`

export const MenuContent = styled.div`
    overflow: hidden;
    border-radius: 10px;
`
export const ShortCut = styled.div`
    margin-left: 10px;
    float:right;
`

export const Submenu = styled.div`
    background-image: url(${rightArrowIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    float: right;
    width: 9px;
    height: 15px;
    display: none;
`

export const Option = styled.div`
    padding: 10px 15px 10px 15px;
    min-width: 160px;
    cursor: default;
    font-size: 12px;
    cursor: pointer;
    ${(props: {disabled?: boolean}) => props.disabled && `
        cursor: not-allowed;
    `}
    &:hover {
        background: #5B86B4;
        color: white !important;
        & > ${Submenu} {
            display: block;
        }
    }
    &:active {
        color: #e9e9e9;
        background: #5B86B4;
    }
`

export const Seperator = styled.div `
    width: 100%;
    height: 1px;
    background: #CCCCCC;
    margin: 0 0 0 0;
`