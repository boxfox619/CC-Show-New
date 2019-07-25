import * as React from 'react';

interface Props {
    label: string
    type: string
    name: string
    defaultValue?: any
    required?: boolean
}

const FormInput: React.FC<Props> = ({ label, name, type, defaultValue, required = false }) => {
    return (
        <label>{label} :
            <input type={type} name={name} defaultValue={defaultValue} required={required} />
        </label>
    )
};

export default FormInput;