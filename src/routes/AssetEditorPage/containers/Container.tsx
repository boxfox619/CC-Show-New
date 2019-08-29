import * as React from 'react';
import styled from 'styled-components';
import * as NextIcon from '../assets/ic-right-arrow.png';
import AssetEditorContainer from './AssetEditorContainer';
import { DetailEditorContainer } from './DetailEditorContainer';

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

const MainContainer = () => {
  const [detailMode, setMode] = React.useState(false);
  const callback = React.useCallback(() => setMode(!detailMode), [detailMode, setMode])

  return (
    <Container>
      <Header>
        <h3 style={{ flex: 1 }}>ASSET EDITOR</h3>
        <NextButton onClick={callback}>
          Next
          <img src={NextIcon} />
        </NextButton>
      </Header>
      {
        !detailMode ? (<AssetEditorContainer />) : (<DetailEditorContainer />)
      }

    </Container>
  )
}

export default MainContainer;