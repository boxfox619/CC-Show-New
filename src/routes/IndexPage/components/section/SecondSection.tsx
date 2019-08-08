import * as React from 'react';
import bgIcon from '../../assets/bg_intro.jpg';
import { Section } from '../page';
import styled from 'styled-components';

const Container = styled(Section)`
    background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgIcon});
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-left: 20%;
    line-height: 1.4em;
`

const Tags = styled.div`
    width: 30em;
    font-size: 3em;
    line-height: 1.1em;
    font-weight: 800;
`

export const SecondSection: React.FC = () => {
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
                <p>파워포인트를 사용해 발표자료를 만들며</p>
                <p>'더 화려하고 자유롭게 발표자료를 만들 수 없을까?' 라는 생각을 하게 되었습니다.</p>
                <p>'HTML/CSS/JavaSript 로 발표자료를 만든다면 가능하지 않을까?'라는 생각을 계기로</p>
                <p>CC Show 프로젝트를 시작하게 되었습니다.</p>
        </Container>
    )
}