import * as React from 'react';
import colorIcon from '../../assets/ic_color.png';
import lineIcon from '../../assets/ic_line.png';
import ControllerWrapper from './ControllerWrapper';
import { TextControlItem, TextInput } from './Input/TextInput';
import { ControlGroup } from './ControlGroup';
import { ControlItem } from './ControlItem';
import ColorPicker from './Input/ColorPicker';

interface Props {
    width: number
    height: number
    x: number
    y: number
    angle: number
    style: React.CSSProperties,
    onChangeStyle: (style: React.CSSProperties) => void
}

const BasicContainer: React.FC<Props> = ({ width, height, x, y, angle, style, onChangeStyle }) => {
    const backgroundColor = style.backgroundColor;
    const borderColor = style.borderColor;
    const borderWidth = style.borderWidth;
    const colorStyle = (!backgroundColor || backgroundColor === 'white') ? { border: '1px solid #5D87B5' } : { backgroundColor };
    const borderStyle = (!borderColor || borderColor === 'white') ? { border: '1px solid #5D87B5' } : { backgroundColor: borderColor };
    const onChangeBackground = React.useCallback((color: string) => onChangeStyle(({ ...style, backgroundColor: color })), [style, onChangeStyle]);
    const onChangeBorder = React.useCallback((color: string) => onChangeStyle(({ ...style, borderColor: color })), [style, onChangeStyle]);
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
                        <div><ColorPicker style={colorStyle} color={backgroundColor || 'white'} onColorChange={onChangeBackground} /></div>
                    </ControlItem>
                    <ControlItem label={<img src={lineIcon} />}>
                        <div>
                            <ColorPicker style={borderStyle} color={style.borderColor || 'black'} onColorChange={onChangeBorder} />
                            <TextInput style={{ width: "60%" }} type="text" value={borderWidth} />
                        </div>
                    </ControlItem>
                </ControlGroup>
            </ControllerWrapper>
        </>
    )
}

export default BasicContainer;