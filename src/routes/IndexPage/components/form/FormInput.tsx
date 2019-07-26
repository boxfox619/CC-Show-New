import * as React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../../core/util/Constraint';

const Input = styled.input`
    height: 20px;
    border: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin-top: 3px;
    margin-bottom: 30px;
    padding-bottom: 5px;
    font-size: 0.8em;
    line-height: 1.2em;
    &:focus {
        outline: none;
        border-bottom: 2px solid rgba(0, 0, 0, 0.9);
    }
`

const Label = styled.label`
    color: ${COLOR.WHITE_TWO};
    font-weight: bold;
    margin-bottom: 5px;
`

interface OwnProps {
    label: string
}

type Props = OwnProps & React.HTMLProps<HTMLInputElement>;

const FormInput: React.FC<Props> = ({ label, ...inputProps }) => {
    return (
        <>
            <Label>{label}</Label>
            <Input {...inputProps as React.HTMLAttributes<HTMLInputElement>} />
        </>
    )
};

export default FormInput;