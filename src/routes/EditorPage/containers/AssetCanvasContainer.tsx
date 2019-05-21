import * as React from 'react';
import AssetCanvas from '../components/assetCanvas';
import StoreModel from '../models/StoreModel';
import { SortAssetPayload } from '../models/payload';
import { connect } from 'react-redux';
import { ContextMenu, Menu } from '../components/context-menu';
import { selectAsset, resizeAsset, updateAssetValue, copyAsset, pasteAsset, deleteAsset, sortAsset } from '../reducers/asset';
import PointModel from './../../../models/PointModel';

const mapDispatchToProps = {
  selectAsset,
  updateAssetValue,
  resizeAsset,
  copyAsset,
  pasteAsset,
  deleteAsset,
  sortAsset
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
  const assetId = currentSlide.selectedAssetId as number;
  const assetValid = assetId !== undefined;
  const menu = [
    new Menu('복사', 'Ctrl + C', [props.copyAsset.bind(null, assetId), closeContextMenu], !assetValid ),
    new Menu('붙여넣기', 'Ctrl + V', [props.pasteAsset, closeContextMenu], !props.editor.copiedAsset ),
    new Menu('삭제', 'Ctrl + D', [props.deleteAsset.bind(null, assetId), closeContextMenu], !assetValid ),
    new Menu('잘라내기', 'Ctrl + X', [props.copyAsset.bind(null, assetId), props.deleteAsset.bind(null, assetId)], !assetValid ),
    new Menu('정렬', '', [], false, [
        new Menu('맨 앞으로 가져오기', 'SHIFT + CTRL + ]', [props.sortAsset.bind(null, new SortAssetPayload(assetId, +1)), closeContextMenu] ),
        new Menu('앞으로 가져오기', 'CTRL + ]', [props.sortAsset.bind(null, new SortAssetPayload(assetId, +1)), closeContextMenu]),
        new Menu('뒤로 보내기', 'CTRL + [', [props.sortAsset.bind(null, new SortAssetPayload(assetId, -1)), closeContextMenu]),
        new Menu('맨 뒤로 보내기', 'SHIFT + CTRL + [', [props.sortAsset.bind(null, new SortAssetPayload(assetId, -1)), closeContextMenu])
      ]
    )
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
      <ContextMenu
        visible={!!menu && !!menuPosition.x && !!menuPosition.y}
        menu={menu}
        position={menuPosition}/>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetCanvasContainer);