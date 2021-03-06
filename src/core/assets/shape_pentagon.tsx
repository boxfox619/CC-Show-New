import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapePentagon: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth, onClick, style }) => (
    <svg onClick={onClick} style={style} version='1.0' xmlns='http://www.w3.org/2000/svg'
        width={width} height={height} viewBox='0 0 21.000000 20.000000'
        preserveAspectRatio='xMidYMid meet'>
        <metadata>
            Created by potrace 1.14, written by Peter Selinger 2001-2017
    </metadata>
        <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
            fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth}>
            <path d='M54 163 c-27 -20 -50 -37 -51 -38 -2 -1 7 -30 18 -64 l21 -62 66 3 66 3 13 44 c7 24 15 52 18 61 5 16 -16 34 -91 82 -7 4 -33 -8 -60 -29z' />
        </g>
    </svg>
)