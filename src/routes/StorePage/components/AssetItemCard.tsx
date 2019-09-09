import * as React from 'react';
import styled from 'styled-components';
import { AssetShopItem } from '../../../models/asset/AssetShopItem';

const Container = styled.div`
    display: inline-block;
    position: relative;
    width: 31%;
    height: 12em;
    border-radius: 5px;
    margin-left: 3.4%;
    margin-bottom: 2em;
    overflow: hidden;
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    box-shadow: 0 3px 20px 4px rgba(0, 0, 0, 0.26);
`
const Thumbnail = styled.div`
    width:100%;
    height: 100%;
    background: white;
    position: relative;
    & > img {
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        left: 50%;
        top:50%;
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
    background: url('/images/ic_bookmark_red.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${(props: { marked: boolean }) => props.marked && `
    background: url('/images/ic_bookmark_red.png');
  `}
`
const Footer = styled.div`
    position: absolute;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    bottom: 0px;
    width: 100%;
    height: 25%;
    background: rgba(0, 0, 0, 0.6);
    display: table;
`
const Title = styled.div`
    color: #FFFFFF;
    font-size: 13px;
`
const SubTitle = styled.div`
    color: #9E9E9F;
    font-size: 9px;
`
const StarList = styled.div`
    display: table-cell;
    width:40%;
    vertical-align: middle;
    text-align: right;
    padding-right: 17px;
`
const Star = styled.div`
    width: 20px;
    height: 18px;
    display: inline-block;
    background: url('/images/ic_star_white.png');
    background-repeat: no-repeat;
    background-position: center;
    ${(props: { active: boolean }) => props.active && `
        background: url('/images/ic_star_yellow.png');
        background-repeat: no-repeat;
        background-position: center;
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
                <SubTitle>
                    <Title>{data.title}</Title>
                    <SubTitle>{data.subTitle}</SubTitle>
                </SubTitle>
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