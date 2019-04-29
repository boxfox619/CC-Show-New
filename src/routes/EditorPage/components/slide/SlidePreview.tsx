import * as React from 'react';
import styled from 'styled-components';
import SlideModel from '../../models/Slide';
import IconButton from './IconButton';
import ShareIcon from '../../assets/ic_share_white.png';
import CopyIcon from '../../assets/ic_copy_white.png';
import DeleteIcon from '../../assets/ic_delete_white.png';

const Container = styled.div`
  overflow: hidden;
  height: 140px;
  margin-top: 20px;
  position: relative;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.26);
  cursor: pointer;
  ${(props: {active: boolean}) => !props.active && `
    &:after{
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
    &:hover::after{
        background-color: rgba(0,0,0,0);
    }
  `}
`

const ThumbnailWrapper = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`
const Thumbnail = styled.div`
    left: 0px;
    margin-top: -12px;
    width: 100%;
    height: calc( 100% + 12px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    ${(props: {background?: string}) => props.background && `
        background: url(${props.background})
    `}
`
const Controller = styled.div`
    background-color: rgba(0,0,0,0.7);
    bottom: 0;
    width: 100%;
    height: 30%;
    display: table;
    position: absolute;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
const Info = styled.div`
    padding: 3px 7px;
    display: table-cell;
    width: 60%;
    vertical-align: middle;
`
const Title = styled.div`
    color: #FFFFFF;
    font-size: 13px;
`
const SubTitle = styled.div`
    color: #9E9E9F;
    font-size: 9px;
`
const Actions = styled.div`
    width: 40%;
    display: table-cell;
    vertical-align: middle;
`

interface Props {
    idx: number,
    slide: SlideModel,
    onClick: () => void,
    active: boolean,
    onShare: () => void,
    onCopy: () => void,
    onDelete: () => void
}

const SlidePreview: React.FC<Props> = (props: Props) => {
    return (
        <Container onClick={props.onClick} active={props.active}>
            <ThumbnailWrapper>
                <Thumbnail background={props.slide.thumbnail} />
            </ThumbnailWrapper>
            <Controller>
                <Info>
                    <Title>{props.slide.name}</Title>
                    <SubTitle>슬라이드{props.idx}</SubTitle>
                </Info>
                <Actions>
                    <IconButton icon={ShareIcon} onClick={props.onShare}/>
                    <IconButton icon={CopyIcon} onClick={props.onCopy}/>
                    <IconButton icon={DeleteIcon} onClick={props.onDelete}/>
                </Actions>
            </Controller>
        </Container>
    )
}

export default SlidePreview;