import * as React from "react";
import styled from 'styled-components';
import StoreModel from '../models/StoreModel';
import { connect } from 'react-redux';
import { AssetType } from '../../../models';
import { changeAssetStyle, updateAssetAttr, updateAssetValue } from '../reducers/asset';
import { ChangeStylePayload } from '../models/payload/ChangeStylePayload';
import { UpdateAttrPayload } from '../models/payload/UpdateAttrPayload';
import { UpdateAssetValuePayload } from '../models/payload';
import { BasicContainer, ImageController, TextController, VideoController } from '../components/attribute-controller';
import ShapeController from '../components/attribute-controller/ShapeController';

const Container = styled.div`
  width: 300px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
`

const mapDispatchToProps = {
  changeAssetStyle,
  updateAssetAttr,
  updateAssetValue
};

const mapStateToProps = (state: StoreModel) => {
  return {
    editor: state.editor
  }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const AssetAttributeController: React.FC<Props> = ({ editor, changeAssetStyle, updateAssetAttr, updateAssetValue }) => {
  const currentSlide = editor.slides.find(s => s.id === editor.selectedSlideId);
  const assetId = !!currentSlide ? currentSlide.selectedAssetId : undefined;
  const asset = !!currentSlide ? currentSlide.assets.find(a => a.id === assetId) : undefined;
  const changeStyleHandler = React.useCallback((style: React.CSSProperties) => assetId && changeAssetStyle(new ChangeStylePayload(assetId, style)), [assetId, changeAssetStyle]);
  const changeAttrHandler = React.useCallback((name: string, value: any) => assetId && updateAssetAttr(new UpdateAttrPayload(assetId, name, value)), [assetId, updateAssetAttr]);
  const changeValue = React.useCallback((value: any) => asset && updateAssetValue(new UpdateAssetValuePayload(asset.id, value)), [asset, updateAssetValue]);
  if (!currentSlide) { return (<></>); }
  if (assetId === undefined || !asset) { return (<></>); }
  return (
    <Container>
      <BasicContainer
        width={asset.width}
        height={asset.height}
        x={asset.position.x}
        y={asset.position.y}
        angle={asset.attribute.angle}
        style={asset.style}
        onChangeStyle={changeStyleHandler}
        onChangeAttribute={changeAttrHandler}
      />
      <ImageController
        visible={asset.type === AssetType.Image}
        image={asset.value}
        onChangeValue={changeValue}
      />
      <TextController
        visible={asset.type === AssetType.Text}
        fonts={editor.supportFonts}
        style={asset.style}
        onChangeStyle={changeStyleHandler}
      />
      <VideoController
        visible={asset.type === AssetType.Video}
        value={asset.value}
        onChangeValue={changeValue}
      />
      <ShapeController
        visible={asset.type === AssetType.Shape}
        onChangeShape={changeValue}
      />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetAttributeController);