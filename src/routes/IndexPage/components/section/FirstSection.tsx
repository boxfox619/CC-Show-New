import * as React from 'react';
import * as bgIcon from '../../assets/bg_intro.jpg';
import { Section } from '../page';
import styled from 'styled-components';

const Container = styled(Section)`
    background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgIcon});
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-left: 20%;
`

const Tags = styled.div`
    width: 30em;
    font-size: 3em;
    line-height: 1.1em;
    font-weight: 800;
`

const WhiteButton = styled.a`
    display: inline-block;
    text-decoration: none;
    color: white;
    font-size: 0.9em;
    padding: 5px 35px;
    border-color: white;
    border-radius: 1em;
    border-style: solid;
    border-width: 2px;
    margin-top: 10px;
    &:hover {
        background: rgba(255, 255, 255, 0.9);
        color: black;
        cursor: pointer;
      }
`


export const FirstSection: React.FC = () => {
    return (
        <Container>
            <Tags>
                <div>
                    <span className="tag">#쉽게</span>
                    <span className="tag">#편리하게</span>
                </div>
                <div>
                    <span className="tag">#화려하게</span>
                    <span className="tag">#빠르게</span>
                </div>
            </Tags>
            <div>
                <p>기존 파워포인트보다 더 쉽고 간편하게 HTML로 발표자료를 제작할 수 있습니다.</p>
                <p>여러분의 아이디어, 창작물을 실현시켜드립니다.</p>
                <WhiteButton>시작하기</WhiteButton>
            </div>
        </Container>
    )
}