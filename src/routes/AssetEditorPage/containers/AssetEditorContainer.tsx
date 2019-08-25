import * as React from 'react';
import styled from 'styled-components';
import * as SaveDarkIcon from '../assets/ic_check_circle_dark.png';
import * as SaveLightIcon from '../assets/ic_check_circle_light.png';
import { TextInput } from '@/components';
import { EditorDock } from '../components/EditorDock';
import AssetCanvas from '@/components/asset-canvas';
import { CustomAssetData, CustomAsset } from '@/models';


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`

const Header = styled.div`
  padding: 5px 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1); 
  align-items: center;
  background-color: #fff;
  display: flex;
`
const SaveButton = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  content: '';
  background: url(${SaveDarkIcon}) center no-repeat;
  background-size: contain;
  &:hover {
    background: url(${SaveLightIcon}) center no-repeat;
    background-size: contain;
  }
`


const AssetEditorContainer: React.FC = ({ ...divProps }) => {
  const [asset, setAsset] = React.useState<CustomAsset>(new CustomAsset(0, 100, 100, { x: 0, y: 0 }, { html: '', css: '', javascript: '' }));
  const handleData = React.useCallback((value: CustomAssetData) => setAsset({ ...asset, value }), [setAsset, asset]);
  const modifyAsset = React.useCallback((id: number, x: number, y: number, width: number, height: number) => setAsset({...asset, position: {x, y}, width, height}), [asset]);
  return (
    <Container {...divProps}>
      <Header>
        <h3 style={{ flex: 1 }}>ASSET EDITOR</h3>
        <TextInput placeholder={"에셋의 이름을 정해주세요!"} type="text" />
        <SaveButton onClick={this.submit} />
      </Header>
      <EditorDock style={{ height: '50%' }} data={asset.value} onChangeData={handleData} />
      <AssetCanvas style={{ flex: 1 }} assets={[asset]} onModifyAsset={modifyAsset} />
    </Container>
  )
}

export default AssetEditorContainer;