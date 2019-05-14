import * as React from 'react';
import AssetCanvas from '../components/assetCanvas';
import StoreModel from '../models/StoreModel';
import { connect } from 'react-redux';
import { Menu, ContextMenu } from '../components/context-menu';
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
  const assets = currentSlide.assets;
  const modifyAsset = (id: number, x: number, y: number, width: number, height: number) => props.resizeAsset({ id, position: { x, y }, width, height });
  const handleValueChange = (id: number, value: any) => props.updateAssetValue({ id, value });
  const selectedAssetId = currentSlide.selectedAssetId;
  let menu: Menu[] = new Array<Menu>();
  if (!!selectedAssetId) {
    menu = [
      { label: '복사', shortcut: 'Ctrl + C', onClick: () => props.copyAsset(selectedAssetId) },
      { label: '붙여넣기', shortcut: 'Ctrl + V', onClick: () => props.pasteAsset() },
      { label: '삭제', shortcut: 'Ctrl + D', onClick: () => props.deleteAsset(selectedAssetId) },
      { label: '잘라내기', shortcut: 'Ctrl + X', onClick: () => { props.copyAsset(selectedAssetId); props.deleteAsset(selectedAssetId); } },
      {
        label: '정렬', subMenus: [
          { label: '맨 앞으로 가져오기', shortcut: 'SHIFT + CTRL + ]', onClick: () => alert('aa') },
          { label: '앞으로 가져오기', shortcut: 'CTRL + ]', onClick: () => alert('aa') },
          { label: '뒤로 보내기', shortcut: 'CTRL + [', onClick: () => alert('aa') },
          { label: '맨 뒤로 보내기', shortcut: 'SHIFT + CTRL + [', onClick: () => alert('aa') },
        ]
      },
    ];
  }
  return (
    <>
      <AssetCanvas
        style={{ flex: 1 }}
        assets={assets}
        selectedAssetId={selectedAssetId}
        onSelectAsset={props.selectAsset}
        modifyAsset={modifyAsset}
        onChangeValue={handleValueChange}
        editable={true}
      />
      <ContextMenu visible={!!menu} menu={menu} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetCanvasContainer);