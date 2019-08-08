import * as React from 'react';
import bgIcon from '../../assets/bg_intro.jpg';
import WhiteLogoIcon from '../../assets/ic_bottom_bar_cc_show.png';
import FacebookIcon from '../../assets/ic_facebook.png';
import GithubIcon from '../../assets/ic_github.png';
import { Section } from '../page';
import styled from 'styled-components';

const Container = styled(Section)`
    background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgIcon});
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
`
const Title = styled.div`
    font-size: 3em;
`
const Line = styled.hr`
    width: 400px;
    height: 2px;
    background: white;
    margin: 2em auto;
`
const Footer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 40px);
    padding: 15px 20px;
    display: flex;
    border-top: solid white 2px;
    font-size: 10px;
    line-height: 13px;
    text-align: left;
    & > #service-icon {
        height: 3.5em;
        margin: 0 15px 0 0;
    }
`
const Contacts = styled.div`
    flex: 1;
    text-align: right;
    & img {
        margin: auto 3px;
        height: 3em;
      }
`


export const FourthSection: React.FC = () => {
    return (
        <Container>
            <Title>생각을 모두 표현하세요!</Title>
            <Line />
            <p>CC Show는 최신 웹 기술로 발표자료를 제작하여 표현의 한계가 없습니다.</p>
            <p>머리속의 모든 생각을 발표자료에 담아 표현해보세요.</p>

            <Footer>
                <img id="service-icon" src={WhiteLogoIcon} />
                <div>
                    <p> @2017 Circle CC Show All Right Reserved.</p>
                    <p> Address (High School)CHOOL) : 78, Gajeonbuk-ro, Yuseong-gu, Daejeon</p>
                    <p> Team : PINNACLE / E-mail : rlatjdfo112@naver.com</p>
                </div>
                <Contacts>
                    <a href=""><img src={FacebookIcon} /></a>
                    <a href=""><img src={GithubIcon} /></a>
                </Contacts>
            </Footer>
        </Container>
    )
}