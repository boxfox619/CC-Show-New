import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';

interface Props {
  defaultValue?: string,
  onChange: (value: string) => void
}

export const CodeEditor: React.FC<Props> = ({ defaultValue, onChange }) => {
  const handleChange = React.useCallback((e: React.ChangeEvent) => onChange(e.currentTarget.textContent), [onChange]);
  const options = {
    selectOnLineNumbers: true
  };
  return (
    <textarea defaultValue={defaultValue} onChange={handleChange}/>
  )
  /* return (
    <MonacoEditor
      height="252"
      width="110%"
      options={options}
      onChange={handleChange}
      language={this.props.codeType}
      defaultValue={defaultValue}
      editorDidMount={this.editorDidMount} />
  ) */
}
