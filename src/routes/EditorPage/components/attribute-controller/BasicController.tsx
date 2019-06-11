import * as React from 'react';
import colorIcon from '../../assets/ic_color.png';
import lineIcon from '../../assets/ic_line.png';
import ControllerWrapper from './ControllerWrapper';
import styled from 'styled-components';
import { TextControlItem, TextInput } from './Input/TextInput';
import { ControlGroup } from './ControlGroup';
import { ControlItem } from './ControlItem';

const ColorRound = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    float: right;
    display: inline-block;
    margin-top: -1px;
`

interface Props {
    width: number
    height: number
    x: number
    y: number
    angle: number
    style: React.CSSProperties
}

const BasicContainer: React.FC<Props> = ({ width, height, x, y, angle, style }) => {
    const fillColor = style.fill;
    const borderColor = style.borderColor;
    const borderWidth = style.borderWidth;
    const colorStyle = (!fillColor || fillColor === 'white') ? { border: '1px solid #5D87B5' } : { backgroundColor: fillColor };
    const borderStyle = (!borderColor || borderColor === 'white') ? { border: '1px solid #5D87B5' } : { backgroundColor: borderColor };
    return (
        <>
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
            <ControllerWrapper title="모양">
                <ControlGroup>
                    <ControlItem label={<img src={colorIcon} />}>
                        <div><ColorRound style={colorStyle} /></div>
                    </ControlItem>
                    <ControlItem label={<img src={lineIcon} />}>
                        <div>
                            <ColorRound style={borderStyle} />
                            <TextInput style={{ width: "60%" }} type="text" value={borderWidth} />
                        </div>
                    </ControlItem>
                </ControlGroup>
            </ControllerWrapper>
        </>
    )
}

export default BasicContainer;