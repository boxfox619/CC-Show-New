import * as React from 'react';
import styled from 'styled-components';
import { DATASET_TYPE_ASSET, DATASET_TYPE_SELECTOR_LINE, DATASET_TYPE_SELECTOR_DOT, RESIZE_TYPE_TOP, RESIZE_TYPE_LEFT_TOP, RESIZE_TYPE_RIGHT_TOP, RESIZE_TYPE_LEFT_BOTTOM, RESIZE_TYPE_RIGHT_BOTTOM, RESIZE_TYPE_RIGHT, RESIZE_TYPE_LEFT, RESIZE_TYPE_BOTTOM } from '../../modules/services/asset.service';
import AssetModel from 'src/core/models/AssetModel';

const AssetContainer = styled.div`
    position: absolute !important;
    overflow: hidden;
    display: inline-block;
    margin: 0;
    padding: 0;
    border: 0;
    margin: 3px;
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

interface OwnProps {
    data: AssetModel,
    isSelected: boolean,
    controllable: boolean,
    onMouseHover: (hover: boolean) => void,
    doubleClicked: boolean
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

export const Asset: React.FC<Props> = (props: Props) => {
    const divProps = props as React.HTMLAttributes<HTMLDivElement>;
    const onMouseOver = () => props.onMouseHover(true);
    const onMouseOut = () => props.onMouseHover(false);

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
                            style={{ 'top': 'calc(' + height + ' + 7px)' }} />
                <SelectorLine data-type={DATASET_TYPE_SELECTOR_LINE}
                            data-resize={RESIZE_TYPE_LEFT}
                            style={{ 'left': '3px' }} />
                <SelectorLine data-type={DATASET_TYPE_SELECTOR_LINE}
                            data-resize={RESIZE_TYPE_RIGHT}
                            style={{ 'left': 'calc(' + width + ' + 7px)' }} />
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
                            style={{ 'cursor': 'ne-resize', 'top': '0px', 'left': 'calc(' + width + ' + 3.5px)' }} />
                <SelectorDot data-type={DATASET_TYPE_SELECTOR_DOT}
                            data-resize={RESIZE_TYPE_LEFT_BOTTOM}
                            style={{ 'cursor': 'ne-resize', 'top': 'calc(' + height + ' + 3.5px)', 'left': '0px' }} />
                <SelectorDot data-type={DATASET_TYPE_SELECTOR_DOT}
                            data-resize={RESIZE_TYPE_RIGHT_BOTTOM}
                            style={{ 'cursor': 'nw-resize', 'top': 'calc(' + height + ' + 3.5px)', 'left': 'calc(' + width + ' + 3.5px)' }} />
            </>
        );
    };

    return (
        <AssetContainer {...divProps} data-type={DATASET_TYPE_ASSET} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <div style={{
                'width': props.data.width,
                'height': props.data.height,
                'padding': '6px',
                'position': 'absolute'
            }}>
                {props.isSelected && renderSelectorLine(props.data.width, props.data.height)}
                {/* <AssetContext
                    attrs={attrs}
                    handleChange={this.handleInputChange}
                    styles={this.getClearStyle()}
                    value={this.props.attribute.value}
                /> */}
                {props.isSelected && renderSelectorDot(props.data.width, props.data.height)}
            </div>
        </AssetContainer>
    )
}