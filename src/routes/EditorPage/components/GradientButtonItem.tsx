import * as React from 'react';
import styled from 'styled-components';
import { ellipseWhiteIcon, activeBackground } from '../assets';

const GradientButton = styled.div`
    display: table;
    font-size: 0.7em;
    font-weight: bold;
    color : #5D87B5;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;
    &:hover {
        background: url('${activeBackground}');
        background-repeat: no-repeat;
        color: white;
    }
    &:hover:after {
        content: "";
        display: table-cell;
        vertical-align: middle;
        background: url('${ellipseWhiteIcon}') no-repeat left center;
        width: 23px;
    }
    ${(props: { active: boolean }) => props.active && `
        background: url('${activeBackground}');
        background-repeat: no-repeat;
        color: white;
        &:after {
            content: "";
            display: table-cell;
            vertical-align: middle;
            background: url('${ellipseWhiteIcon}') no-repeat left center;
            width: 23px;
        }
    `}
`

interface OwnProps {
    label: string,
    active?: boolean
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

const GradientButtonItem: React.FC<Props> = ({ label, active = false, ...divProps }) => {
    return (
        <GradientButton {...divProps} active={active}>
            <div style={{ padding: '7px 8px' }}>
                {label}
            </div>
        </GradientButton>
    )
}

export default GradientButtonItem;