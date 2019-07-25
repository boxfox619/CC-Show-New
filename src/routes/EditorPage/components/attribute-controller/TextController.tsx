import * as React from 'react';
import styled from 'styled-components';
import { ControllerWrapper, ControlGroup, ControlItem } from './control';
import { TextControlItem } from './Input/TextInput';
import { optional } from '../../../../core/hoc';
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
const FontSelector = styled.select`
    width: 90%; 
    cursor: pointer;
    border: none;
    outline: none;
`

interface Props {
    fonts: string[]
    style: React.CSSProperties,
    onChangeStyle: (style: React.CSSProperties) => void
}

const TextController: React.FC<Props> = ({ fonts, style, onChangeStyle }) => {
    const fontHandler = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => onChangeStyle({ ...style, fontFamily: e.target.value }), [style, onChangeStyle]);
    const numberHandler = React.useCallback((attribute: string, e: React.ChangeEvent<HTMLInputElement>) => onChangeStyle({ ...style, [attribute]: parseInt(e.target.value || '0', 10) }), [style, onChangeStyle])
    const colorHandler = React.useCallback((color: string) => onChangeStyle({ ...style, color }), [style, onChangeStyle]);
    const attrHandler = React.useCallback((attribute: string, value: string) => onChangeStyle({ ...style, [attribute]: value }), [style, onChangeStyle]);
    return (
        <ControllerWrapper title="텍스트">
            <ControlGroup>
                <ControlItem label="폰트">
                    <FontSelector onChange={fontHandler} value={style.fontFamily}>
                        {fonts.map(font => <option key={font} value={font}>{font}</option>)}
                    </FontSelector>
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
                <img src={(style.textAlign === 'left') ? Assets.formatAlignLeftApplyIcon : Assets.formatAlignLeftIcon}
                    onClick={attrHandler.bind(null, 'textAlign', (style.textAlign === 'left') ? 'justify' : 'left')} alt="text align left" />
                <img src={(style.textAlign === 'center') ? Assets.formatAlignCenterApplyIcon : Assets.formatAlignCenterIcon}
                    onClick={attrHandler.bind(null, 'textAlign', (style.textAlign === 'center') ? 'justify' : 'center')} alt="text align center" />
                <img src={(style.textAlign === 'right') ? Assets.formatAlignRightApplyIcon : Assets.formatAlignRightIcon}
                    onClick={attrHandler.bind(null, 'textAlign', (style.textAlign === 'right') ? 'justify' : 'right')} alt="text align right" />
                <img src={(style.textAlign === 'justify') ? Assets.formatAlignJustifyApplyIcon : Assets.formatAlignJustifyIcon}
                    onClick={attrHandler.bind(null, 'textAlign', (style.textAlign === 'right') ? 'justify' : 'justify')} alt="text align justify" />
                <img src={(style.fontWeight === 'bold') ? Assets.formatBoldApplyIcon : Assets.formatBoldIcon}
                    onClick={attrHandler.bind(null, 'fontWeight', (style.fontWeight === 'bold') ? 'normal' : 'bold')} alt="font weight bold" />
                <img src={(style.fontStyle === 'italic') ? Assets.formatItalicApplyIcon : Assets.formatItalicIcon}
                    onClick={attrHandler.bind(null, 'fontStyle', (style.fontStyle === 'italic') ? 'normal' : 'italic')} alt="font weight italic" />
                <img src={(style.textDecoration === 'underline') ? Assets.formatUnderlineApplyIcon : Assets.formatUnderlinedIcon}
                    onClick={attrHandler.bind(null, 'textDecoration', (style.textDecoration === 'underline') ? 'normal' : 'underline')} alt="font weight underline" />
                <img src={(style.textDecoration === 'line-through') ? Assets.formatStrikethroughApplyIcon : Assets.formatStrikethroughIcon}
                    onClick={attrHandler.bind(null, 'textDecoration', (style.textDecoration === 'line-through') ? 'normal' : 'line-through')} alt="font weight line through" />
            </IconGroup>
        </ControllerWrapper>
    )
}

export default optional(TextController);