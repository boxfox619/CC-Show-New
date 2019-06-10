import * as React from 'react';
import ControllerWrapper from './ControllerWrapper';
import { TextControlItem } from './Input/TextInput';
import { ControlGroup } from './ControlGroup';

interface Props {
    width: number
    height: number
    x: number
    y: number
    angle: number
    style: React.CSSProperties
}

const BasicContainer: React.FC<Props> = ({ width, height, x, y, angle, style }) => {
    /*     const fillColor = style.fill;
        const borderColor = style.borderColor;
        const borderWeight = style.borderWidth; */
    return (
        <ControllerWrapper title="속성">
            <ControlGroup>
                <TextControlItem label="H" value={height} />
                <TextControlItem label="W" value={width} />
            </ControlGroup>
            <ControlGroup>
                <TextControlItem label="X" value={x} />
                <TextControlItem label="Y" value={y} />
            </ControlGroup>
            <TextControlItem label="Angle" value={angle} />
        </ControllerWrapper>
    )
}

export default BasicContainer;