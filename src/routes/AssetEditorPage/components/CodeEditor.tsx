import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';

interface Props {
  defaultValue?: string,
  language: 'html' | 'css' | 'javascript',
  onChange: (value: string) => void
}

export const CodeEditor: React.FC<Props> = ({ language, defaultValue, onChange }) => {
  const handleChange = React.useCallback((value: string) => onChange(value), [onChange]);
  const options = {
    selectOnLineNumbers: true,
    language
  };
  return (
    <MonacoEditor
      options={options}
      onChange={handleChange}
      language={language}
      defaultValue={defaultValue}/>
  )
}
