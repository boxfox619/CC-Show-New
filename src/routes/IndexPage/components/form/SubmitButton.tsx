import styled from 'styled-components';
import { COLOR } from '../../../../core/util/Constraint';

const SubmitButton = styled.button`
    text-align: center;
    vertical-align: middle;
    height: 40px;
    background: none;
    cursor: pointer;
    outline: none;
    border: none;
    transition-duration: 0.5s;
    background-color: ${COLOR.AZURE};
    color: white;
    &:hover {
        background-color: ${COLOR.AQUA_BLUE};
    }
`

export default SubmitButton;