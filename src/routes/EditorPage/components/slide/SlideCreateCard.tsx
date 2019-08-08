import * as React from 'react';
import styled from 'styled-components';
import { addWhiteIcon } from '../../assets';

const Container = styled.div`
    cursor: pointer;
    position: relative;
    height: 140px;
    margin-top: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.26);

    &::before{
    content:'';
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.2);
    -webkit-animation: fadein 0.4s forwards;
    transition: all 0.5s;
    border-radius: 10px;
    }

    &:hover::before{
    background-color: rgba(0,0,0,0.4);
    }

    & > img{
        position: absolute;
        width: 5em;
        height: 5em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
const Description = styled.div`
    position: absolute;
    text-align: center;
    font-weight: gray;
    font-size: 15px;
    color: white;
    width: 100%;
    bottom: 15%;
`

interface Props {
    onClick: () => void,
}

const SlideCreateCard: React.FC<Props> = (props: Props) => {
    return (
        <Container onClick={props.onClick}>
            <Description>새 슬라이드</Description>
            <img src={addWhiteIcon} alt="Add new slide" />
        </Container>
    )
}

export default SlideCreateCard;