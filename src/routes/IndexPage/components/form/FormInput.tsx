import * as React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../../core/util/Constraint';
import { TextInput } from '@/components';

const FormTextInput = styled(TextInput)`
    margin-top: 3px;
    margin-bottom: 30px;
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
            <FormTextInput {...inputProps as React.HTMLAttributes<HTMLInputElement>} />
        </>
    )
};

export default FormInput;