import * as React from 'react';
import styled from 'styled-components';
import GradientButtonItem from '../components/GradientButtonItem';
import Profile from '../components/Profile';
import { addAsset } from '../modules/asset';
import { connect } from 'react-redux';
import StoreModel from '../models/store/StoreModel';

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
const mapDispatchToProps = {
    addAsset
};

const mapStateToProps = (state: StoreModel) => {
    return {
        auth: state.auth,
        editor: state.editor
    }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & React.HTMLAttributes<HTMLDivElement>;

const ShowControllerContainer: React.FC<Props> = (props: Props) => {
    const divProps = props as React.HTMLAttributes<HTMLDivElement>;
    const createAssetByType = (assetType: string) => () => props.addAsset({assetType, point: {x: 0, y: 0}});
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowControllerContainer)