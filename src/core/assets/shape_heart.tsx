import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeHeart: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth, onClick, style }) => (
  <svg onClick={onClick} style={style} version='1.0' xmlns='http://www.w3.org/2000/svg'
    width={width} height={height} viewBox='0 0 20.000000 20.000000'
    preserveAspectRatio='xMidYMid meet'>
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
    <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
      fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth}>
      <path d='M32 184 c-40 -28 -28 -73 41 -154 l28 -33 25 24 c42 39 77 106 70 134 -9 37 -41 50 -72 30 -22 -14 -26 -14 -40 0 -19 19 -24 19 -52 -1z' />
    </g>
  </svg>
)