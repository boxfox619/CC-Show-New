import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeRoundSquare: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth, onClick, style }) => (
    <svg onClick={onClick} style={style} version='1.0' xmlns='http://www.w3.org/2000/svg'
        width={width} height={height} viewBox='0 0 20.000000 20.000000'
        preserveAspectRatio='xMidYMid meet'>
        <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
        <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
            fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth}>
            <path d='M12 188 c-16 -16 -16 -160 0 -176 7 -7 42 -12 88 -12 46 0 81 5 88 12 16 16 16 160 0 176 -16 16 -160 16 -176 0z' />
        </g>
    </svg>
)