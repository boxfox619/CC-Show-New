import * as React from 'react';
import styled from 'styled-components';
import bgIcon from '../../assets/bg_intro.jpg';
import { Section } from '../page';
import ShoppingIcon from '../../assets/ic_shopping.png';
import BuildIcon from '../../assets/ic_build.png';
import HtmlIcon from '../../assets/ic_html.png';
import CartIcon from '../../assets/ic_cart.png';
import PdfIcon from '../../assets/ic_pdf.png';
import ShareIcon from '../../assets/ic_share.png';

const Container = styled(Section)`
    background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgIcon});
    font-size: 1em;
    color: white;
    line-height: 1.4em;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Items = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    & li img {
        display: block;
        height: 5em;
        margin-bottom: 6%;
        margin: 0 auto;
        margin-bottom: 10%;
    }
    & li {
        display: inline-flex;
        flex-flow: column;
        align-items: center;
        width: 28%;
        height: 40%;
        margin: 2.5%;
        text-align: center;
        font-size: 0.9em;
      }
`

export const ThirdSection: React.FC = () => {
    return (
        <Container>
            <Items>
                <li>
                    <img src={ShoppingIcon} />
                    <p>더 이상 유료 라이센스를 구매하여 발표자료를 제작하지 마세요.</p>
                    <p> CC Show는 무료 오픈소스 서비스입니다.</p>
                </li>
                <li>
                    <img src={BuildIcon} />
                    <p>최신 웹 기술을 활용하여 독창적인 발표자료를 제작할 수 있습니다.</p>
                    <p>발표자료뿐만 아니라 다이어그램, 디자인, 정적 웹 개발까지 </p>
                </li>
                <li>
                    <img src={HtmlIcon} />
                    <p>HTML을 몰라도 걱정마세요.</p>
                    <p>드래그&amp;드롭으로 발표자료를 제작하고 에셋스토어를 활용할 수 있습니다.</p>
                </li>
                <li>
                    <img src={CartIcon} />
                    <p>최신 웹 기술을 활용하여 독창적인 발표자료를 제작할 수 있습니다.</p>
                    <p> 발표자료뿐만 아니라 다이어그램, 디자인, 정적 웹 개발까지</p>
                </li>
                <li>
                    <img src={PdfIcon} />
                    <p>최신 웹 기술을 활용하여 독창적인 발표자료를 제작할 수 있습니다.</p>
                    <p>발표자료뿐만 아니라 다이어그램, 디자인, 정적 웹 개발까지</p>
                </li>
                <li>
                    <img src={ShareIcon} />
                    <p>최신 웹 기술을 활용하여 독창적인 발표자료를 제작할 수 있습니다.</p>
                    <p>발표자료뿐만 아니라 다이어그램, 디자인, 정적 웹 개발까지</p>
                </li>
            </Items>
        </Container>
    )
}