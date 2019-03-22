import * as React from 'react';
import styled from 'styled-components';
import GradientBackgroundImg from '../assets/bg_active.png';
import ButtonCircleImg from '../assets/ic_ellipse_white.png';

const GradientButton = styled.div`
    display: table;
    width: 100%;
    font-size: 0.7em;
    font-weight: bold;
    color : #5D87B5;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;
    &:hover {
        background: url('${GradientBackgroundImg}');
        color: white;
    }
    &:hover:after {
        content: "";
        display: table-cell;
        vertical-align: middle;
        background: url('${ButtonCircleImg}') no-repeat left center;
        width: 23px;
    }
`

interface OwnProps {
    label: string,
    activated: boolean
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

const GradientButtonItem: React.FC<Props> = (props: Props) => {
    return (
        <GradientButton {...props}>
            <div style={{ padding: '7px 8px' }}>
                {props.label}
            </div>
        </GradientButton>
    )
}

export default GradientButtonItem;