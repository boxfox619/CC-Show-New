import * as React from 'react';
import colorIcon from '../../assets/ic_color.png';
import lineIcon from '../../assets/ic_line.png';
import ControllerWrapper from './control/ControllerWrapper';
import { TextControlItem, TextInput, ColorPicker } from './Input';
import { ControlGroup } from './control/ControlGroup';
import { ControlItem } from './control/ControlItem';

interface Props {
    width: number
    height: number
    x: number
    y: number
    angle: number
    style: React.CSSProperties,
    onChangeAttribute: (name: string, value: any) => void,
    onChangeStyle: (style: React.CSSProperties) => void
}

const BasicContainer: React.FC<Props> = ({ width, height, x, y, angle, style, onChangeAttribute, onChangeStyle }) => {
    const backgroundColor = style.backgroundColor;
    const borderColor = style.borderColor;
    const borderWidth = style.borderWidth;
    const colorStyle = (!backgroundColor || backgroundColor === 'white') ? { border: '1px solid #5D87B5' } : { backgroundColor };
    const borderStyle = (!borderColor || borderColor === 'white') ? { border: '1px solid #5D87B5' } : { backgroundColor: borderColor };
    const onChangeBackground = React.useCallback((color: string) => onChangeStyle(({ ...style, backgroundColor: color })), [style, onChangeStyle]);
    const onChangeBorder = React.useCallback((color: string) => onChangeStyle(({ ...style, borderColor: color })), [style, onChangeStyle]);
    const onChangeBorderWidth = React.useCallback((w: number) => onChangeStyle({ ...style, borderWidth: w }), [style, onChangeStyle]);
    return (
        <>
            <ControllerWrapper title="속성">
                <ControlGroup>
                    <TextControlItem label="H" type="number" value={height} onValueChange={onChangeAttribute.bind(null, 'height')} />
                    <TextControlItem label="W" type="number" value={width} onValueChange={onChangeAttribute.bind(null, 'width')} />
                </ControlGroup>
                <ControlGroup>
                    <TextControlItem label="X" type="number" value={x} onValueChange={onChangeAttribute.bind(null, 'x')} />
                    <TextControlItem label="Y" type="number" value={y} onValueChange={onChangeAttribute.bind(null, 'y')} />
                </ControlGroup>
                <TextControlItem label="Angle" value={angle} onValueChange={onChangeAttribute.bind(null, 'width')} />
            </ControllerWrapper>
            <ControllerWrapper title="모양">
                <ControlGroup>
                    <ControlItem label={<img src={colorIcon} />}>
                        <div><ColorPicker style={colorStyle} color={backgroundColor || 'white'} onColorChange={onChangeBackground} /></div>
                    </ControlItem>
                    <ControlItem label={<img src={lineIcon} />}>
                        <div>
                            <ColorPicker style={borderStyle} color={style.borderColor || 'black'} onColorChange={onChangeBorder} />
                            <TextInput style={{ width: "60%" }} type="text" value={borderWidth} onValueChange={onChangeBorderWidth} />
                        </div>
                    </ControlItem>
                </ControlGroup>
            </ControllerWrapper>
        </>
    )
}

export default BasicContainer;