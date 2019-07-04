import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeDiamond: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth, onClick, style }) => (
  <svg onClick={onClick} style={style} version='1.0' xmlns='http://www.w3.org/2000/svg'
    width={width} height={height} viewBox='0 0 21.000000 20.000000'
    preserveAspectRatio='xMidYMid meet'>
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
    <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
      fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth} >
      <path d='M55 150 l-50 -50 50 -50 50 -50 50 50 50 50 -50 50 -50 50 -50 -50z' />
    </g>
  </svg>
)