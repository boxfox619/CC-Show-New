import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeTriangle: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth }) => (
  <svg version='1.0' xmlns='http://www.w3.org/2000/svg'
    width={width} height={height} viewBox='0 0 23.000000 20.000000'
    preserveAspectRatio='xMidYMid meet'>
    <metadata>
      Created by potrace 1.14, written by Peter Selinger 2001-2017
            </metadata>
    <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
      fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth}>
      <path d='M58 102 l-56 -97 54 -3 c29 -2 80 -2 113 0 l59 3 -55 95 c-30 52 -56 96 -57 97 -1 1 -27 -41 -58 -95z' />
    </g>
  </svg>
)