import * as React from 'react';
import styled from 'styled-components';
import { DATASET_TYPE_ASSET, DATASET_TYPE_SELECTOR_LINE, DATASET_TYPE_SELECTOR_DOT, RESIZE_TYPE_TOP, RESIZE_TYPE_LEFT_TOP, RESIZE_TYPE_RIGHT_TOP, RESIZE_TYPE_LEFT_BOTTOM, RESIZE_TYPE_RIGHT_BOTTOM, RESIZE_TYPE_RIGHT, RESIZE_TYPE_LEFT, RESIZE_TYPE_BOTTOM } from '../../modules/asset.service';
import AssetModel from 'src/models/AssetModel';
import { AssetContext } from './context/AssetContext';

const AssetContainer = styled.div`
    position: absolute !important;
    overflow: hidden;
    display: inline-block;
    border: 0;
    margin: 3px;
    padding: 6px;
`

const SelectorLine = styled.div`
    position: absolute;
    z-index: 99;
    background-color: #038AFD;
    ${(props: { horizontal?: boolean }) => props.horizontal ? `
        height: 2px;
        width: calc(100% - 10px);
        cursor: ns-resize;
    ` : `
        height: calc(100% - 10px);
        width: 2px;
        cursor: ew-resize;
    `}
`
const SelectorDot = styled.div`
    position: absolute;
    width: 8px;
    height: 8px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    z-index: 99;
    background-color: #038AFD;
`

interface Props {
    data: AssetModel,
    isHovered: boolean,
    isSelected: boolean,
    controllable: boolean,
    onMouseHover: (hover: boolean) => void,
    isDoubleClicked: boolean,
    onValueChange: (value: any) => void
}

export const Asset: React.FC<Props> = ( { data, isSelected, controllable, onMouseHover, onValueChange, isDoubleClicked }) => {
    const onMouseOver = () => onMouseHover(true);
    const onMouseOut = () => onMouseHover(false);

    const renderSelectorLine = (width: number, height: number) => {
        return (
            <>
                <SelectorLine data-type={DATASET_TYPE_SELECTOR_LINE}
                    data-resize={RESIZE_TYPE_TOP}
                    horizontal={true}
                    style={{ 'top': '3px' }} />
                <SelectorLine data-type={DATASET_TYPE_SELECTOR_LINE}
                    data-resize={RESIZE_TYPE_BOTTOM}
                    horizontal={true}
                    style={{ 'top': `calc( ${height}px + 7px)` }} />
                <SelectorLine data-type={DATASET_TYPE_SELECTOR_LINE}
                    data-resize={RESIZE_TYPE_LEFT}
                    style={{ 'left': '3px' }} />
                <SelectorLine data-type={DATASET_TYPE_SELECTOR_LINE}
                    data-resize={RESIZE_TYPE_RIGHT}
                    style={{ 'left': `calc( ${width}px + 7px)` }} />
            </>
        );
    };
    const renderSelectorDot = (width: number, height: number) => {
        return (
            <>
                <SelectorDot data-type={DATASET_TYPE_SELECTOR_DOT}
                    data-resize={RESIZE_TYPE_LEFT_TOP}
                    style={{ 'cursor': 'nw-resize', 'top': '0px', 'left': '0px' }} />
                <SelectorDot data-type={DATASET_TYPE_SELECTOR_DOT}
                    data-resize={RESIZE_TYPE_RIGHT_TOP}
                    style={{ 'cursor': 'ne-resize', 'top': '0px', 'left': `calc(${width}px + 3.5px)` }} />
                <SelectorDot data-type={DATASET_TYPE_SELECTOR_DOT}
                    data-resize={RESIZE_TYPE_LEFT_BOTTOM}
                    style={{ 'cursor': 'ne-resize', 'top': `calc( ${height}px + 3.5px)`, 'left': '0px' }} />
                <SelectorDot data-type={DATASET_TYPE_SELECTOR_DOT}
                    data-resize={RESIZE_TYPE_RIGHT_BOTTOM}
                    style={{ 'cursor': 'nw-resize', 'top': `calc( ${height}px + 3.5px)`, 'left': `calc(${width}px + 3.5px)` }} />
            </>
        );
    };

    return (
        <AssetContainer data-type={DATASET_TYPE_ASSET} data-id={data.id} onMouseOver={onMouseOver} onMouseOut={onMouseOut}
            style={{
                'width': `${data.width}px`,
                'height': `${data.height}px`,
                'left': `${data.position.x}px`,
                'top': `${data.position.y}px`
            }}>
            {(isSelected) && renderSelectorLine(data.width, data.height)}
            <AssetContext
                data={data}
                isSelected={isSelected}
                isDoubleClicked={isDoubleClicked}
                controllable={controllable}
                onValueChange={onValueChange}
            />
            {(isSelected) && renderSelectorDot(data.width, data.height)}
        </AssetContainer>
    )
}