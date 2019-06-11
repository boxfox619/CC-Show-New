import * as React from 'react';
import styled from 'styled-components';
import { toControlItem } from '../control/ControlItem';

const Input = styled.input`
    height: 100%;
    text-align: right;
    border: 0;
    display: inline;
    outline-width: 0;
    float: right;
    margin-right: 5px;
`

interface Props {
    onValueChange: (value: any) => void
}

export const TextInput: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({ onValueChange, ...inputProps }) => {
    const handleChange = React.useCallback((e: React.ChangeEvent) => onValueChange((e.target as HTMLInputElement).value), [onValueChange]);
    return (<Input {...inputProps} onChange={handleChange} />)
}

export const TextControlItem = toControlItem(TextInput);