import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeArrow7: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth, onClick, style }) => (
  <svg onClick={onClick} style={style} version='1.0' xmlns='http://www.w3.org/2000/svg'
    width={width} height={height} viewBox='0 0 23.000000 7.000000'
    preserveAspectRatio='xMidYMid meet'>
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
    <g transform='translate(0.000000,7.000000) scale(0.100000,-0.100000)'
      fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth} />
  </svg>
)

