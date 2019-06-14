import * as React from 'react';
import styled from 'styled-components';
import { ControllerWrapper, ControlGroup, ControlItem } from './control';
import { TextControlItem } from './Input/TextInput';
import { optional } from 'src/core/hoc';
import { ColorPicker } from './Input';
import * as Assets from '../../assets';

const IconGroup = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    & > * {
        cursor: pointer;
    }
`

interface Props {
    style: React.CSSProperties,
    onChangeStyle: (style: React.CSSProperties) => void
}

const TextController: React.FC<Props> = ({ style, onChangeStyle }) => {
    const fontHandler = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => onChangeStyle({ ...style, fontFamily: e.target.value }), [style, onChangeStyle]);
    const numberHandler = React.useCallback((attribute: string, e: React.ChangeEvent<HTMLInputElement>) => onChangeStyle({ ...style, [attribute]: parseInt(e.target.value || '0', 10) }), [style, onChangeStyle])
    const colorHandler = React.useCallback((color: string) => onChangeStyle({ ...style, color }), [style, onChangeStyle]);
    const attrHandler = React.useCallback((attribute: string, value: string) => onChangeStyle({ ...style, [attribute]: value }), [style, onChangeStyle]);
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
            <IconGroup> 
                <img src={(style.textAlign === 'left')? Assets.formatAlignLeftApplyIcon : Assets.formatAlignLeftIcon}
                    onClick={attrHandler.bind(null,'textAlign', (style.textAlign === 'left')? 'justify': 'left')} />
                <img src={(style.textAlign === 'center')? Assets.formatAlignCenterApplyIcon : Assets.formatAlignCenterIcon}
                    onClick={attrHandler.bind(null,'textAlign', (style.textAlign === 'center')? 'justify': 'center')} />
                <img src={(style.textAlign === 'right')? Assets.formatAlignRightApplyIcon : Assets.formatAlignRightIcon}
                    onClick={attrHandler.bind(null,'textAlign', (style.textAlign === 'right')? 'justify': 'right')} />
                <img src={(style.textAlign === 'justify')? Assets.formatAlignJustifyApplyIcon : Assets.formatAlignJustifyIcon}
                    onClick={attrHandler.bind(null,'textAlign', (style.textAlign === 'right')? 'justify': 'justify')} />
                <img src={(style.fontWeight === 'bold')? Assets.formatBoldApplyIcon : Assets.formatBoldIcon}
                    onClick={attrHandler.bind(null,'fontWeight', (style.fontWeight === 'bold')? 'normal': 'bold')} />
                <img src={(style.fontStyle === 'italic')? Assets.formatItalicApplyIcon : Assets.formatItalicIcon}
                    onClick={attrHandler.bind(null,'fontStyle', (style.fontStyle === 'italic')? 'normal': 'italic')} />
                <img src={(style.textDecoration === 'underline')? Assets.formatUnderlineApplyIcon : Assets.formatUnderlinedIcon}
                    onClick={attrHandler.bind(null,'textDecoration', (style.textDecoration === 'underline')? 'normal': 'underline')} />
                <img src={(style.textDecoration === 'line-through')? Assets.formatStrikethroughApplyIcon : Assets.formatStrikethroughIcon}
                    onClick={attrHandler.bind(null,'textDecoration', (style.textDecoration === 'line-through')? 'normal': 'line-through')} />
            </IconGroup>
        </ControllerWrapper>
    )
}

export default optional(TextController);