import * as React from 'react';
import styled from 'styled-components';
import * as NextIcon from '../assets/ic-right-arrow.png';
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

const Header = styled.div`
  padding: 5px 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1); 
  align-items: center;
  background-color: #fff;
  display: flex;
`
const NextButton = styled.div`
  display: flex;
  padding: 10px 0;
  cursor: pointer;
  & > img {
    width: 20px;
  }
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
  const [asset, setAsset] = React.useState<CustomAsset>(new CustomAsset(0, 100, 100, { x: 0, y: 0 }, { html: '<div class="test">\ntest asset\n</div>', css: '.test {\ncolor: red;\n}', javascript: '' }));
  const handleData = React.useCallback((value: CustomAssetData) => updateData(value), [updateData]);
  const modifyAsset = React.useCallback((id: number, x: number, y: number, width: number, height: number) => setAsset({ ...asset, position: { x, y }, width, height }), [asset]);
  return (
    <Container {...divProps}>
      <Header>
        <h3 style={{ flex: 1 }}>ASSET EDITOR</h3>
        <NextButton>
          Next
          <img src={NextIcon} />
        </NextButton>
        {/* 
          <AssetNameInput placeholder={"에셋의 이름을 정해주세요!"} type="text" />
          <SaveButton onClick={this.submit} /> 
        */}
      </Header>
      <EditorDock style={{ height: '50%' }} data={editor.data} onChangeData={handleData} />
      <AssetCanvas style={{ flex: 1 }} assets={[{ ...asset, value: editor.data }]} onModifyAsset={modifyAsset} />
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetEditorContainer);