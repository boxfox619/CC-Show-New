import * as React from 'react';
import AssetCanvas from '../components/assetCanvas';
import StoreModel from '../models/StoreModel';
import { connect } from 'react-redux';
import { ContextMenu } from '../components/context-menu';
import { selectAsset, resizeAsset, updateAssetValue, copyAsset, pasteAsset, deleteAsset } from '../reducers/asset';

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
  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const modifyAsset = (id: number, x: number, y: number, width: number, height: number) => props.resizeAsset({ id, position: { x, y }, width, height });
  const openContextMenu = () => setVisibleMenu(true);
  const closeContextMenu = () => setVisibleMenu(false);
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
    const position = {x : 10, y: 10};
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
      <ContextMenu visible={!!menu && visibleMenu} menu={menu} position={position}/>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetCanvasContainer);