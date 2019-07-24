import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeSpade: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth, onClick, style }) => (
    <svg onClick={onClick} style={style} version='1.0' xmlns='http://www.w3.org/2000/svg'
        width={width} height={height} viewBox='0 0 20.000000 20.000000'
        preserveAspectRatio='xMidYMid meet'>
        <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>
        <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
            fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth}>
            <path d='M65 165 c-59 -48 -65 -55 -65 -78 0 -40 57 -76 75 -47 12 19 26 11 15 -9 -15 -28 -13 -31 17 -31 21 0 24 3 15 12 -7 7 -12 18 -12 25 0 11 4 11 20 1 35 -22 78 19 66 63 -5 19 -65 73 -96 86 -3 1 -18 -9 -35 -22z' />
        </g>
    </svg>
)