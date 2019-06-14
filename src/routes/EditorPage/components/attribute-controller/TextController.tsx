import * as React from 'react';
import { ControllerWrapper, ControlGroup, ControlItem } from './control';
import { TextControlItem } from './Input/TextInput';
import { optional } from 'src/core/hoc';
import { ColorPicker } from './Input';

interface Props {
    style: React.CSSProperties,
    onChangeStyle: (style: React.CSSProperties) => void
}

const TextController: React.FC<Props> = ({ style, onChangeStyle }) => {
    const fontHandler = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => onChangeStyle({ ...style, fontFamily: e.target.value }), [onChangeStyle]);
    const numberHandler = React.useCallback((attribute: string, e: React.ChangeEvent<HTMLInputElement>) => onChangeStyle({ ...style, [attribute]: parseInt(e.target.value || '0', 10) }), [onChangeStyle])
    const colorHandler = React.useCallback((color: string) => onChangeStyle({ ...style, color }), [onChangeStyle]);
    return (
        <ControllerWrapper title="텍스트">
            <ControlGroup>
                <ControlItem label="폰트">
                    <select style={{ 'width': '90%', 'cursor': 'pointer' }} onChange={fontHandler} value={style.fontFamily}>
                        <option value="굴림">굴림</option>
                        <option value="굴림체">굴림체</option>
                        <option value="궁서">궁서</option>
                        <option value="궁서체">궁서체</option>
                        <option value="돋움">돋움</option>
                        <option value="돋움체">돋움체</option>
                        <option value="바탕">바탕</option>
                        <option value="바탕체">바탕체</option>
                        <option value="휴면엽서체">휴먼엽서체</option>
                    </select>
                </ControlItem>
                <TextControlItem label="weight" type="number" onValueChange={numberHandler.bind(null, 'fontFamily')} />
            </ControlGroup>
            <ControlGroup>
                <TextControlItem label="size" type="number" onValueChange={numberHandler.bind(null, 'size')} />
                <TextControlItem label="weight" type="number" onValueChange={numberHandler.bind(null, 'lineHeight')} />
            </ControlGroup>
            <ControlGroup>
                <TextControlItem label="size" type="number" onValueChange={numberHandler.bind(null, 'size')} />
                <ControlItem label="color">
                    <div><ColorPicker color={style.color || '#fff'} onColorChange={colorHandler} /></div>
                </ControlItem>
            </ControlGroup>
        </ControllerWrapper>
    )
}

export default optional(TextController);