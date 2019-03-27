import * as React from 'react';
import styled from 'styled-components';
import GradientButtonItem from './GradientButtonItem';
import Profile from './Profile';
import PointModel from 'src/core/models/PointModel';

const Container = styled.div`
    background-color: white;
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.26);
    height: 100%;
    display: inline-block;
`

const ButtonGroup = styled.div`
    padding: 20px;
    display: flex;
    flex-flow: column;
    width: 200px;
    & > * {
        margin-bottom: 5px;
    }
`

const SplitBar = styled.div`
    display: block;
    height: 1.5px;
    background-color: rgba(33,33,33,0.1);
    width: 40px;
    margin-left: 20px;
`
interface OwnProps {
    addAsset: (type: string, point: PointModel) => void
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

const ShowController: React.FC<Props> = (props: Props) => {
    const divProps = props as React.HTMLAttributes<HTMLDivElement>;
    const createAssetByType = (assetType: string) => () => props.addAsset(assetType, {x: 0, y: 0});
    return (
        <Container {...divProps}>
            <Profile thumbnail={"https://avatars1.githubusercontent.com/u/14067209?s=460&v=4"} name={"홍길동"} subName={"치킨비어"} />
            <SplitBar />
            <ButtonGroup>
                <GradientButtonItem label="텍스트" onClick={createAssetByType('text')}/>
                <GradientButtonItem label="비디오" onClick={createAssetByType('video')}/>
                <GradientButtonItem label="이미지" onClick={createAssetByType('image')}/>
                <GradientButtonItem label="도형" onClick={createAssetByType('shape')}/>
                <GradientButtonItem label="기타"/>
            </ButtonGroup>
            <SplitBar />
            <ButtonGroup>
                <GradientButtonItem label="슬라이드 리스트" />
                <GradientButtonItem label="슬라이드 쇼" />
            </ButtonGroup>
        </Container>
    )
}

export default ShowController;