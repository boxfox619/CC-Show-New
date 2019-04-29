import * as React from 'react';
import styled from 'styled-components';
import EllipseIcon from '../assets/ic_ellipse_gray.png';
import HideIcon from '../assets/ic_arrow_left.png';
import DraggableSlideList from '../components/slide/DraggableSlideList';
import SlideModel from '../models/Slide';

const Container = styled.div`
    position: absolute;
    z-index: -1;
    top:0;
    left: 0;
    background: #F5F5F6;
    min-width: 14em;
    height: 100vh;
    overflow-y: scroll;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    & ul {
        height: 100%;
        list-style: none;
        padding: 0;
    }
    &::-webkit-scrollbar {
        width: 0px;
        height: 8px;
    }
    ${(props: { visible: boolean }) => props.visible && `
        transform: translate(240px,0);
    `}
`
const Inner = styled.div`
    padding: 20px 13px;
    min-height: calc( 100% - 40px );
`
const Title = styled.div`
    font-size : 12px;
    color : #5D87B5;
    font-weight : bold;
    vertical-align: middle;
    display: table;
    &:before {
        content: "";
        display: table-cell;
        vertical-align: middle;
        background: url(${EllipseIcon}) no-repeat left center;
        width: 23px;
    }
`
const Hide = styled.div`
    background: url(${HideIcon}) no-repeat left center;
    position: absolute;
    top: 24px;
    right: 10px;
    cursor: pointer;
    width: 10px;
    height: 10px;
`
interface OwnProps {
    visible: boolean,
    toggleSlideManager: () => void,
    selectedSlideId: number,
    slides: SlideModel[],
    moveSlide: (payload: {from: number, to: number}) => void,
    selectSlide: (id: number) => void,
    copySlide: (id: number) => void,
    createSlide: () => void,
    shareSlide: (id: number) => void,
    deleteSlide: (id: number) => void
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

const SlideListManager: React.FC<Props> = (props: Props) => {
    return (
        <Container {...props}>
            <Inner>
                <Title>슬라이드 리스트</Title>
                <Hide onClick={props.toggleSlideManager} />
                <DraggableSlideList
                    selectedSlideId={props.selectedSlideId}
                    slides={props.slides}
                    moveSlide={props.moveSlide} 
                    selectSlide={props.selectSlide}
                    copySlide={props.copySlide}
                    createSlide={props.createSlide}
                    shareSlide={props.shareSlide}
                    deleteSlide={props.deleteSlide}
                    />
            </Inner>
        </Container>
    )
}

export default SlideListManager;