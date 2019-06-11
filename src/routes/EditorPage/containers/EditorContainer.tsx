import { History, Location } from 'history';
import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import StoreModel from '../models/StoreModel';
import styled from 'styled-components';
import ShowController from './ShowController';
import { addAsset } from '../reducers/asset';
import SlideListManager from './SlideListManager';
import { moveSlide, selectSlide, copySlide, createSlide, shareSlide, deleteSlide } from '../reducers/slide';
import AssetCanvasContainer from './AssetCanvasContainer';
import AssetAttributeController from './AssetAttributeController';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  width: 100vw;
  height: 99.9vh;
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
  const [visibleAssetManager, setVisibleAssetManager] = useState(false);
  const [visibleSlideManager, setVisibleSlideManager] = useState(false);
  const [visibleSlideShow, setVisibleSlideShow] = useState(false);
  const toggleAssetManager = () => setVisibleAssetManager(!visibleAssetManager);
  const toggleSlideManager = () => setVisibleSlideManager(!visibleSlideManager);
  const toggleSlideShow = () => setVisibleSlideShow(!visibleSlideShow);
  const onContext = (e: React.MouseEvent) => e.preventDefault();
  return (
    <Container onContextMenu={onContext}>
      <SlideListManager
        style={{ zIndex: 1 }}
        visible={visibleSlideManager}
        toggleSlideManager={toggleSlideManager}
        selectedSlideId={props.editor.selectedSlideId}
        slides={props.editor.slides}
        moveSlide={props.moveSlide}
        selectSlide={props.selectSlide}
        copySlide={props.copySlide}
        createSlide={props.createSlide}
        shareSlide={props.shareSlide}
        deleteSlide={props.deleteSlide}
      />
      <ShowController
        style={{ flex: 0, zIndex: 2 }}
        name={props.auth.name}
        email={props.auth.email}
        thumbnail={props.auth.thumbnail}
        visibleSlideManager={visibleSlideManager}
        addAsset={props.addAsset}
        toggleAssetManager={toggleAssetManager}
        toggleSlideManager={toggleSlideManager}
        toggleSlideShow={toggleSlideShow}
      />
      <AssetCanvasContainer />
      <AssetAttributeController />
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)