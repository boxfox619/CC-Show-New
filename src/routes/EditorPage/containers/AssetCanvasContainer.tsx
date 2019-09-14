import * as React from 'react';
import StoreModel from '../models/StoreModel';
import { SortAssetPayload } from '../models/payload';
import { connect } from 'react-redux';
import { ContextMenu, Menu } from '../components/context-menu';
import { selectAsset, resizeAsset, updateAssetValue, copyAsset, pasteAsset, deleteAsset, sortAsset } from '../reducers/asset';
import { Point } from '../../../models';
import AssetCanvas from '@/components/asset-canvas';

const mapDispatchToProps = {
  updateAssetValue,
  resizeAsset,
  copyAsset,
  pasteAsset,
  deleteAsset,
  sortAsset,
  selectAsset
};

const mapStateToProps = (state: StoreModel) => {
  return {
    editor: state.editor
  }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const AssetCanvasContainer: React.FC<Props> = (props: Props) => {
  const [menuPosition, setMenuPosition] = React.useState<Point>({ x: 0, y: 0 });
  const currentSlide = props.editor.slides.find(s => s.id === props.editor.selectedSlideId);
  if (!currentSlide) { return (<></>); }
  const selectedAssetId = currentSlide.selectedAssetId;
  const modifyAsset = (id: number, x: number, y: number, width: number, height: number) => props.resizeAsset({ id, position: { x, y }, width, height });
  const openContextMenu = (e: React.MouseEvent) => setMenuPosition({ x: e.pageX, y: e.pageY });
  const closeContextMenu = () => setMenuPosition({ x: 0, y: 0 });
  const assetValid = selectedAssetId !== undefined;
  const menu = [
    new Menu('복사', 'Ctrl + C', [props.copyAsset.bind(null, selectedAssetId), closeContextMenu], !assetValid),
    new Menu('붙여넣기', 'Ctrl + V', [props.pasteAsset, closeContextMenu], !props.editor.copiedAsset),
    new Menu('삭제', 'Ctrl + D', [props.deleteAsset.bind(null, selectedAssetId), closeContextMenu], !assetValid),
    new Menu('잘라내기', 'Ctrl + X', [props.copyAsset.bind(null, selectedAssetId), props.deleteAsset.bind(null, selectedAssetId)], !assetValid),
    new Menu('정렬', '', [], false, [
      new Menu('맨 앞으로 가져오기', 'SHIFT + CTRL + ]', [props.sortAsset.bind(null, new SortAssetPayload(selectedAssetId, +1, true)), closeContextMenu]),
      new Menu('앞으로 가져오기', 'CTRL + ]', [props.sortAsset.bind(null, new SortAssetPayload(selectedAssetId, +1)), closeContextMenu]),
      new Menu('뒤로 보내기', 'CTRL + [', [props.sortAsset.bind(null, new SortAssetPayload(selectedAssetId, -1)), closeContextMenu]),
      new Menu('맨 뒤로 보내기', 'SHIFT + CTRL + [', [props.sortAsset.bind(null, new SortAssetPayload(selectedAssetId, -1, true)), closeContextMenu])
    ])
  ];
  return (
    <>
      <AssetCanvas
        style={{ flex: 1 }}
        assets={currentSlide.assets}
        onSelectAsset={props.selectAsset}
        onModifyAsset={modifyAsset}
        onChangeValue={props.updateAssetValue}
        onContextMenu={openContextMenu}
        onClick={closeContextMenu}
      />
      <ContextMenu
        visible={!!menu && !!menuPosition.x && !!menuPosition.y}
        menu={menu}
        position={menuPosition} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetCanvasContainer);