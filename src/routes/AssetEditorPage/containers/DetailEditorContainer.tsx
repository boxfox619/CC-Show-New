import * as React from 'react';
import styled from 'styled-components';
import { ThumbnailInput } from '../components/ThumbnailInput';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  display: flex;
  flex-flow: row;
  padding: 20px;
  @media(max-width: 900px) {
    flex-flow: column;
  }
`
const Title = styled.p`
  color: #898989;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px
`
const Input = styled.input`
  border: solid 1px #898989;
  padding: 11px;
  font-size: 18px;
  margin-bottom: 25px;
`
const Thumbnail = styled(ThumbnailInput)`
  flex: 1;
  margin-right: 10px;
  height: 450px;
  margin-bottom: 20px;
  max-width: 900px;
`
const FormContainer = styled.div`
  flex: 1;
  & > * {
    width: calc(100% - 20px);
  }
`

export const DetailEditorContainer: React.FC = () => {
  return (
    <Container>
      <Thumbnail/>
      <FormContainer>
        <Title>타이틀</Title>
        <Input placeholder="텍스트를 입력하세요" />
        <Title>가격</Title>
        <Input placeholder="가격을 입력하세요" />
        <Title>스토어 공개범위</Title>
      </FormContainer>
    </Container>
  )
}