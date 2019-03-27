import { History, Location } from 'history';
import * as React from 'react';
import {useState} from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import StoreModel from '../models/store/StoreModel';
import styled from 'styled-components';
import ShowControllerContainer from '../components/asset/creator/ShowController';
import { addAsset } from '../modules/asset';
import PointModel from 'src/core/models/PointModel';
import SlideListManager from '../components/slide/SlideListManager';
import { moveSlide, selectSlide, copySlide, createSlide, shareSlide, deleteSlide } from '../modules/slide';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

interface OwnProps {
    history: History,
    location: Location,
    match: match,
}

const mapDispatchToProps = {
    addAsset,
    moveSlide,
    selectSlide,
    copySlide,
    createSlide,
    shareSlide,
    deleteSlide
};

const mapStateToProps = (state: StoreModel) => {
    return {
        auth: state.auth,
        editor: state.editor
    }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & OwnProps;

const EditorContainer: React.FC<Props> = (props: Props) => {
    const createAsset = (assetType: string, point: PointModel) => props.addAsset({ assetType, point });
    const moveSlide = (from: number, to: number) => props.moveSlide({ from, to });
    const [visibleAssetManager, setVisibleAssetManager] = useState(false);
    const [visibleSlideManager, setVisibleSlideManager] = useState(false);
    const [visibleSlideShow, setVisibleSlideShow] = useState(false);
    const toggleAssetManager = () => setVisibleAssetManager(!visibleAssetManager);
    const toggleSlideManager = () => setVisibleSlideManager(!visibleSlideManager);
    const toggleSlideShow = () => setVisibleSlideShow(!visibleSlideShow);
    return (
      <Container>
        <ShowControllerContainer
          name={props.auth.name}
          email={props.auth.email}
          thumbnail={props.auth.thumbnail}
          addAsset={createAsset}
          toggleAssetManager={toggleAssetManager}
          toggleSlideManager={toggleSlideManager}
          toggleSlideShow={toggleSlideShow}
        />
        <SlideListManager
          visible={visibleSlideManager}
          toggleSlideManager={toggleSlideManager}
          selectedSlideId={props.editor.selectedSlideId}
          slides={props.editor.slides}
          moveSlide={moveSlide}
          selectSlide={props.selectSlide}
          copySlide={props.copySlide}
          createSlide={props.createSlide}
          shareSlide={props.shareSlide}
          deleteSlide={props.deleteSlide}
        />
      </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)