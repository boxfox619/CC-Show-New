import * as React from 'react';
import { ControllerWrapper, ControlGroup, ControlItem } from './control';
import { optional } from 'src/core/hoc';
import { ShapeArrow1, ShapeClover } from '../../assets';
import { ShapeDiamond, ShapeEllipse, ShapeHeart, ShapeHexagon, ShapeMoon, ShapeOctagon, ShapePentagon, ShapeRoundSquare, ShapeSpade } from '../../assets';
import { ShapeSquare, ShapeStar, ShapeTriangle } from '../../assets';
import { ShapeProps } from '../../assets/ShapeAsset';

interface Props {
    onChangeShape: (shape: React.ComponentType<ShapeProps>) => void
}

const ShapeController: React.FC<Props> = ({ onChangeShape }) => {
    const shapeSize = '20px';
    const shapes = [ShapeArrow1, ShapeClover, ShapeDiamond, ShapeEllipse,
        ShapeHeart, ShapeHexagon, ShapeMoon, ShapeOctagon, ShapePentagon,
        ShapeRoundSquare, ShapeSpade, ShapeSquare, ShapeStar, ShapeTriangle
    ];
    return (
        <ControllerWrapper title="도형">
            <ControlGroup>
                <ControlItem style={{ display: 'block', height: 'auto', padding: '10px' }}>
                    {shapes.map((Shape, idx) => (
                        <Shape key={`${idx}-key`} width={shapeSize} height={shapeSize} onClick={onChangeShape.bind(null, Shape)} style={{ cursor: 'pointer' }} />
                    ))}
                </ControlItem>
            </ControlGroup>
        </ControllerWrapper>
    )
}

export default optional(ShapeController);