import styled from 'styled-components';
import { toControlItem } from '../ControlItem';

export const TextInput = styled.input`
    height: 100%;
    text-align: right;
    border: 0;
    display: inline;
    outline-width: 0;
    float: right;
    margin-right: 5px;
`

export const TextControlItem = toControlItem(TextInput);