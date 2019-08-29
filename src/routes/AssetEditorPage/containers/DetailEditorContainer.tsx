import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: hidden;
`
const Title = styled.p`
  color: #898989;
  font-weight: bold;
  font-size: 20px;
`
const Input = styled.input`
  border: solid 1px #898989;
  padding: 11px;
  font-size: 18px;
`

export const DetailEditorContainer: React.FC = () => {
  return (
    <Container>
      <Title>타이틀</Title>
      <Input placeholder="텍스트를 입력하세요"/>
      <Title>가격</Title>
      <Input placeholder="가격을 입력하세요"/>
      <Title>스토어 공개범위</Title>
    </Container>
  )
}