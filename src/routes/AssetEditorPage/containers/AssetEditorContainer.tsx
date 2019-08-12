import * as React from 'react';
import styled from 'styled-components';

const Header = styled.div`

`
const TitleInput = styled.input`
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  outline: none;
  font-size: 15px;
  line-height: 15px;
  padding: 0 5px;
  &:focus {
    border-bottom: 2px solid rgba(0, 0, 0, 0.9);
  }
`
const RightController = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  right: 20px;
`
const SaveButton = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  content: '';
  background: url('/images/ic_check_circle_dark.png') center no-repeat;
  background-size: contain;
  &:hover {
    background: url('/images/ic_check_circle_light.png') center no-repeat;
    background-size: contain;
  }
`


const AssetEditorContainer: React.FC = ({ ...divProps }) => {
  return (
    <div {...divProps}>
      <Header>
        <h1>ASSET EDITOR</h1>
        <RightController>
          <TitleInput placeholder={"에셋의 이름을 정해주세요!"} type="text" />
          <SaveButton onClick={this.submit} />
        </RightController>
      </Header>

      <div>editor</div>
      <div>preview</div>
    </div>
  )
}

export default AssetEditorContainer;