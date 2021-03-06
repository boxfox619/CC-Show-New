import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeClover: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth, onClick, style }) => (
  <svg onClick={onClick} style={style} version='1.0' xmlns='http://www.w3.org/2000/svg'
    width={width} height={height} viewBox='0 0 20.000000 20.000000'
    preserveAspectRatio='xMidYMid meet'>
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
    <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
      fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth} >
      <path d='M60 185 c-6 -8 -9 -22 -6 -33 5 -14 1 -18 -15 -18 -30 1 -46 -26 -33 -61 11 -34 47 -42 75 -17 18 17 20 16 43 -5 42 -40 87 -5 72 55 -5 17 -13 24 -30 24 -20 0 -22 4 -18 26 3 16 -1 30 -9 35 -22 14 -65 11 -79 -6z' />
    </g>
  </svg>
)