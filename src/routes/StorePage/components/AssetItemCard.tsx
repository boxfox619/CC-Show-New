import * as React from 'react';
import styled from 'styled-components';
import * as BookmarkIcon from '../assets/ic_bookmark_red.png';
import * as WhiteStarIcon from '../assets/ic_star_white.png';
import * as YelloStarIcon from '../assets/ic_star_yellow.png';
import { AssetShopItem } from '../../../models/asset/AssetShopItem';

const Container = styled.div`
    display: inline-block;
    position: relative;
    height: 200px;
    border-radius: 5px;
    margin-bottom: 2em;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 3px 20px 4px rgba(0, 0, 0, 0.26);
    width: 23%;
    margin-left: 2%;
    @media(max-width: 1350px) {
        width: 30%;
        margin-left: 2%;
    }
    @media(max-width: 1050px) {
        width: 45%;
        margin-left: 3%;
    }
    @media(max-width: 700px) {
        width: 400px;
        margin: 0 calc(50% - 200px);
    }
    @media(max-width: 450px) {
        width: 90%;
        margin: 0 5%;
        height: 150px;
    }
`
const Thumbnail = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    position: relative;
    & > img {
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        max-width: 120%;
        max-height: 120%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`
const ButtonHeader = styled.div`
    position: absolute;
    display: table;
    table-layout: fixed;
    border-spacing: 10px;
    top: 3px;
    left: 0px;
`
const Bookmark = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  content: '';
  width: 20px;
  height: 24px;
  cursor: pointer;
  background: url(${BookmarkIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${(props: { marked: boolean }) => props.marked && `
    background: url(${BookmarkIcon});
  `}
`
const Footer = styled.div`
    position: absolute;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
    height: 25%;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.6);
    display: table;
    & > * {
        display: table-cell;
        vertical-align: middle;
    }
`
const Title = styled.div`
    color: #FFFFFF;
    font-size: 13px;
`
const TitleContent = styled.div`
    color: #9E9E9F;
    font-size: 9px;
    padding-left: 17px;
`
const StarList = styled.div`
    width:40%;
    text-align: right;
    padding-right: 17px;
`
const Star = styled.div`
    width: 20px;
    height: 18px;
    display: inline-block;
    background-image: url(${WhiteStarIcon});
    background-repeat: no-repeat;
    background-position: center;
    ${(props: { active: boolean }) => props.active && `
        background-image: url(${YelloStarIcon});
    `}
`

interface Props {
    data: AssetShopItem
    onClick: (id: number) => void,
    onMark: (id: number) => void,
}

export const AssetItemCard: React.FC<Props> = ({ data, onClick, onMark }) => {
    const handleClick = React.useCallback(() => onClick(data.id), [data.id, onClick]);
    const handleMark = React.useCallback(() => onMark(data.id), [data.id, onMark]);
    return (
        <Container>
            <Thumbnail onClick={handleClick} ><img src={data.thumbnail} /></Thumbnail>
            <ButtonHeader />
            <Bookmark onClick={handleMark} marked={data.marked} />
            <Footer>
                <TitleContent>
                    <Title>{data.title}</Title>
                    <div>{data.subTitle}</div>
                </TitleContent>
                <StarList>
                    <Star active={data.rate > 0} />
                    <Star active={data.rate > 1} />
                    <Star active={data.rate > 2} />
                    <Star active={data.rate > 3} />
                    <Star active={data.rate > 4} />
                </StarList>
            </Footer>
        </Container>
    )
}