import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeMoon: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth, onClick, style }) => (
  <svg onClick={onClick} style={style} version='1.0' xmlns='http://www.w3.org/2000/svg'
    width={width} height={height} viewBox='0 0 19.000000 20.000000'
    preserveAspectRatio='xMidYMid meet'>
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
    <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
      fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth}>
      <path d='M99 174 c12 -15 21 -37 21 -49 0 -38 -37 -75 -75 -75 -40 0 -39 -20 1 -39 67 -30 144 17 144 89 0 49 -49 100 -96 100 -12 0 -11 -5 5 -26z' />
    </g>
  </svg>
)