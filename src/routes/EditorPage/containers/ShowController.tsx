import * as React from 'react';
import styled from 'styled-components';
import { CreateAssetPayload } from '../models/payload';
import { AssetType } from '../../../models';
import GradientButtonItem from '../components/GradientButtonItem';
import Profile from '../components/Profile';
import { ShapeArrow1 } from '../../../core/assets';

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
    name: string,
    email: string,
    thumbnail: string,
    visibleSlideManager: boolean,
    addAsset: (payload: CreateAssetPayload) => void,
    toggleAssetManager: () => void,
    toggleSlideManager: () => void,
    toggleSlideShow: () => void
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

const ShowController: React.FC<Props> = (props: Props) => {
    const divProps = props as React.HTMLAttributes<HTMLDivElement>;
    const createAssetByType = (assetType: AssetType, value?: any) => () => props.addAsset(new CreateAssetPayload(assetType, { x: 0, y: 0 }, value));
    return (
        <Container {...divProps}>
            <Profile
                thumbnail={props.thumbnail}
                name={props.name}
                subName={props.email} />
            <SplitBar />
            <ButtonGroup>
                <GradientButtonItem label="텍스트" onClick={createAssetByType(AssetType.Text, 'Welcome to CC-Show!')} />
                <GradientButtonItem label="비디오" onClick={createAssetByType(AssetType.Video)} />
                <GradientButtonItem label="이미지" onClick={createAssetByType(AssetType.Image, 'http://poooo.ml/data/editor/1810/aa7462a202b36ecf40db2f8e44d4f594_1539011087_018.gif')} />
                <GradientButtonItem label="도형" onClick={createAssetByType(AssetType.Shape, ShapeArrow1)} />
                <GradientButtonItem label="기타" onClick={props.toggleAssetManager} />
            </ButtonGroup>
            <SplitBar />
            <ButtonGroup>
                <GradientButtonItem label="슬라이드 리스트" onClick={props.toggleSlideManager} active={props.visibleSlideManager} />
                <GradientButtonItem label="슬라이드 쇼" onClick={props.toggleSlideShow} />
            </ButtonGroup>
        </Container>
    )
}

export default ShowController;