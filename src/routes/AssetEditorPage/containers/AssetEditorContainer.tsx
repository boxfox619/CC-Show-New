import * as React from 'react';
import styled from 'styled-components';
import { EditorDock } from '../components/EditorDock';
import AssetCanvas from '@/components/asset-canvas';
import { CustomAssetData, CustomAsset } from '@/models';
import { updateData } from '../reducers';
import { connect } from 'react-redux';
import { StoreModel } from '../models';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: hidden;
`

const mapDispatchToProps = {
  updateData
};

const mapStateToProps = (state: StoreModel) => {
  return {
    auth: state.auth,
    editor: state.assetEditor
  }
};

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & React.HTMLAttributes<HTMLDivElement>;

const AssetEditorContainer: React.FC<Props> = ({ auth, editor, updateData, ...divProps }) => {
  const [asset, setAsset] = React.useState<CustomAsset>(new CustomAsset(0, 100, 100, { x: 0, y: 0 }));
  const handleData = React.useCallback((value: CustomAssetData) => updateData(value), [updateData]);
  const modifyAsset = React.useCallback((id: number, x: number, y: number, width: number, height: number) => setAsset({ ...asset, position: { x, y }, width, height }), [asset]);
  return (
    <Container {...divProps}>
      <EditorDock style={{ height: '50%' }} data={editor.data} onChangeData={handleData} />
      <AssetCanvas style={{ flex: 1 }} assets={[{ ...asset, value: editor.data }]} onModifyAsset={modifyAsset} />
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetEditorContainer);