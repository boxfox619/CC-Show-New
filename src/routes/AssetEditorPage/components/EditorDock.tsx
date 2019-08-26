import * as React from 'react';
import styled from 'styled-components';
import { CodeEditor } from './CodeEditor';
import { CustomAssetData } from '@/models';

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  color: rgb(123,123,123);
  padding: 10px;
`

const Content = styled.div`
  display: flex;
  border-bottom: #E9E9E9 1px solid;
  & > * {
    flex: 1;
    display: flex;
    flex-flow: column;
  }
`

const BlockCodeEditor = styled(CodeEditor)`
  flex: 1;
`

interface Props {
  data: CustomAssetData
  onChangeData: (data: CustomAssetData) => void
}

export const EditorDock: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ data, onChangeData, ...divProps }) => {
  const handleHtml = React.useCallback((val: string) => onChangeData({ ...data, html: val }), [onChangeData, data.javascript, data.css]);
  const handleCss = React.useCallback((val: string) => onChangeData({ ...data, css: val }), [onChangeData, data.html, data.javascript]);
  const handleJavascript = React.useCallback((val: string) => onChangeData({ ...data, javascript: val }), [onChangeData, data.html, data.css]);
  return (
    <Content {...divProps}>
      <div>
        <Title>HTML</Title>
        <BlockCodeEditor defaultValue={data.html} onChange={handleHtml} language="html" />
      </div>
      <div>
        <Title>CSS</Title>
        <BlockCodeEditor defaultValue={data.css} onChange={handleCss} language="css" />
      </div>
      <div>
        <Title>JAVASCRIPT</Title>
        <BlockCodeEditor defaultValue={data.javascript} onChange={handleJavascript} language="javascript" />
      </div>
    </Content>
  )
};
