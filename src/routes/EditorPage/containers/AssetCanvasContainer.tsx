import * as React from 'react';
import AssetCanvas from '../components/assetCanvas';
import StoreModel from '../models/StoreModel';
import { connect } from 'react-redux';
import { ContextMenu } from '../components/context-menu';
import { selectAsset, resizeAsset, updateAssetValue, copyAsset, pasteAsset, deleteAsset } from '../reducers/asset';
import PointModel from './../../../models/PointModel';

const mapDispatchToProps = {
  selectAsset,
  updateAssetValue,
  resizeAsset,
  copyAsset,
  pasteAsset,
  deleteAsset
};

const mapStateToProps = (state: StoreModel) => {
  return {
    editor: state.editor
  }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const AssetCanvasContainer: React.FC<Props> = (props: Props) => {
  const currentSlide = props.editor.slides.find(s => s.id === props.editor.selectedSlideId);
  if (!currentSlide) { return (<></>); }
  const [menuPosition, setMenuPosition] = React.useState<PointModel>({ x: 0, y: 0 });
  const modifyAsset = (id: number, x: number, y: number, width: number, height: number) => props.resizeAsset({ id, position: { x, y }, width, height });
  const openContextMenu = (e: React.MouseEvent) => setMenuPosition({x: e.pageX, y: e.pageY});
  const closeContextMenu = () => setMenuPosition({ x: 0, y: 0 });
  const assetId = currentSlide.selectedAssetId;
  const menu = [
    { label: '복사', shortcut: 'Ctrl + C', onClick: assetId ? () => props.copyAsset(assetId) : undefined },
    { label: '붙여넣기', shortcut: 'Ctrl + V', onClick: props.editor.copiedAsset ? () => props.pasteAsset() : undefined },
    { label: '삭제', shortcut: 'Ctrl + D', onClick: assetId ? () => props.deleteAsset(assetId) : undefined },
    { label: '잘라내기', shortcut: 'Ctrl + X', onClick: assetId ? () => { props.copyAsset(assetId); props.deleteAsset(assetId); } : undefined },
    {
      label: '정렬', subMenus: [
        { label: '맨 앞으로 가져오기', shortcut: 'SHIFT + CTRL + ]', onClick: () => alert('aa') },
        { label: '앞으로 가져오기', shortcut: 'CTRL + ]', onClick: () => alert('aa') },
        { label: '뒤로 보내기', shortcut: 'CTRL + [', onClick: () => alert('aa') },
        { label: '맨 뒤로 보내기', shortcut: 'SHIFT + CTRL + [', onClick: () => alert('aa') },
      ]
    }
  ];
  return (
    <>
      <AssetCanvas
        style={{ flex: 1 }}
        assets={currentSlide.assets}
        selectedAssetId={assetId}
        onSelectAsset={props.selectAsset}
        modifyAsset={modifyAsset}
        onChangeValue={props.updateAssetValue}
        editable={true}
        onContextMenu={openContextMenu}
        onClick={closeContextMenu}
      />
      <ContextMenu visible={!!menu && !!menuPosition.x && !!menuPosition.y} menu={menu} position={menuPosition} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetCanvasContainer);