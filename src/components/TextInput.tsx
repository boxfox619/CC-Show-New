import styled from 'styled-components';

export const TextInput = styled.input`
    border: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding: 5px 5px;
    font-size: 0.8em;
    line-height: 1.2em;
    &:focus {
        outline: none;
        border-bottom: 2px solid rgba(0, 0, 0, 0.9);
    }
`