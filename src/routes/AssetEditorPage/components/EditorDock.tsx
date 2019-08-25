import * as React from 'react';
import styled from 'styled-components';
import { CodeEditor } from './CodeEditor';
import { CustomAssetData } from '@/models';

const Content = styled.div`
  display: flex;
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
        <div>HTML</div>
        <BlockCodeEditor defaultValue={data.html} onChange={handleHtml} language="html"/>
      </div>
      <div>
        <div>CSS</div>
        <BlockCodeEditor defaultValue={data.css} onChange={handleCss} language="css"/>
      </div>
      <div>
        <div>JAVASCRIPT</div>
        <BlockCodeEditor defaultValue={data.javascript} onChange={handleJavascript} language="javascript"/>
      </div>
    </Content>
  )
};
