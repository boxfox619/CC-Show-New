import * as React from 'react';
import styled from 'styled-components';
import { CodeEditor } from './CodeEditor';

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
}

export const EditorDock: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ ...divProps }) => {
  const [html, setHtml] = React.useState('');
  const [css, setCss] = React.useState('');
  const [js, setJs] = React.useState('');
  return (
    <Content {...divProps}>
      <div>
        <div>HTML</div>
        <BlockCodeEditor defaultValue={html} onChange={this.handleChange1} />
      </div>
      <div>
        <div>CSS</div>
        <BlockCodeEditor defaultValue={css} onChange={this.handleChange1} />
      </div>
      <div>
        <div>JAVASCRIPT</div>
        <BlockCodeEditor defaultValue={js} onChange={this.handleChange1} />
      </div>
    </Content>
  )
};
