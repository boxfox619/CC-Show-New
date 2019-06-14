import * as React from 'react';
import { colorIcon, lineIcon } from '../../assets';
import { TextControlItem, TextInput, ColorPicker } from './Input';
import { ControllerWrapper, ControlGroup, ControlItem } from './control';

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
    const borderWidth = style.borderWidth;
    const colorHandler = React.useCallback((attrName: string, color: string) => onChangeStyle(({ ...style, [attrName]: color })), [style, onChangeStyle]);
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
                        <div><ColorPicker color={style.backgroundColor || '#fff'} onColorChange={colorHandler.bind(null, 'backgroundColor')} /></div>
                    </ControlItem>
                    <ControlItem label={<img src={lineIcon} />}>
                        <div>
                            <ColorPicker color={style.borderColor || '#000'} onColorChange={colorHandler.bind(null, 'borderColor')} />
                            <TextInput style={{ width: "60%" }} type="text" value={borderWidth} onValueChange={onChangeBorderWidth} />
                        </div>
                    </ControlItem>
                </ControlGroup>
            </ControllerWrapper>
        </>
    )
}

export default BasicContainer;