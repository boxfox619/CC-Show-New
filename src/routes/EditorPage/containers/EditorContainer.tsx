import { History, Location } from 'history';
import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import StoreModel from '../models/store/StoreModel';
import styled from 'styled-components';
import ShowController from './ShowController';
import { addAsset, selectAsset, resizeAsset, updateAssetValue } from '../modules/asset';
import PointModel from 'src/core/models/PointModel';
import SlideListManager from './SlideListManager';
import { moveSlide, selectSlide, copySlide, createSlide, shareSlide, deleteSlide } from '../modules/slide';
import { AssetCanvas } from '../components/asset/canvas/AssetCanvas';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 2;
`
const MainContainer = styled.div`
  display: flex;
  flex-flow: row;
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
  selectAsset,
  updateAssetValue,
  resizeAsset,
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
  const [visibleAssetManager, setVisibleAssetManager] = useState(false);
  const [visibleSlideManager, setVisibleSlideManager] = useState(false);
  const [visibleSlideShow, setVisibleSlideShow] = useState(false);
  const toggleAssetManager = () => setVisibleAssetManager(!visibleAssetManager);
  const toggleSlideManager = () => setVisibleSlideManager(!visibleSlideManager);
  const toggleSlideShow = () => setVisibleSlideShow(!visibleSlideShow);
  const currentSlide = props.editor.slides.find(s => s.id === props.editor.selectedSlideId);
  const assets = currentSlide ? currentSlide.assets : [];
  const modifyAsset = (id: number, x: number, y: number, width: number, height: number) => props.resizeAsset({ id, position: { x, y }, width, height });
  return (
    <Container>
      <SlideListManager
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
      <MainContainer>
        <ShowController
          style={{ flex: 0 }}
          name={props.auth.name}
          email={props.auth.email}
          thumbnail={props.auth.thumbnail}
          addAsset={createAsset}
          toggleAssetManager={toggleAssetManager}
          toggleSlideManager={toggleSlideManager}
          toggleSlideShow={toggleSlideShow}
        />
        <AssetCanvas
          style={{ flex: 1 }}
          assets={assets}
          selectedAssetId={currentSlide && currentSlide.selectedAssetId}
          onSelectAsset={props.selectAsset}
          modifyAsset={modifyAsset}
          onChangeValue={props.updateAssetValue}
          editable={true}
        />
      </MainContainer>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)