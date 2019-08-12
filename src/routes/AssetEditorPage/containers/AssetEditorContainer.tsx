import * as React from 'react';
import styled from 'styled-components';
import * as SaveDarkIcon from '../assets/ic_check_circle_dark.png';
import * as SaveLightIcon from '../assets/ic_check_circle_light.png';
import { TextInput } from '@/components';

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
  return (
    <div {...divProps}>
      <Header>
        <h3 style={{flex: 1}}>ASSET EDITOR</h3>
        <TextInput placeholder={"에셋의 이름을 정해주세요!"} type="text" />
        <SaveButton onClick={this.submit} />
      </Header>

      <div>editor</div>
      <div>preview</div>
    </div>
  )
}

export default AssetEditorContainer;