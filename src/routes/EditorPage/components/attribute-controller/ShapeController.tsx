import * as React from 'react';
import { ControllerWrapper, ControlGroup, ControlItem } from './control';
import { optional } from 'src/core/hoc';
import { ShapeArrow1, ShapeArrow8, ShapeClover } from '../../assets';
import { ShapeArrow2 } from '../../assets/shape_arrow2';
import { ShapeArrow3 } from '../../assets/shape_arrow3';
import { ShapeArrow4 } from '../../assets/shape_arrow4';
import { ShapeArrow5 } from '../../assets/shape_arrow5';
import { ShapeArrow6 } from '../../assets/shape_arrow6';
import { ShapeArrow7 } from '../../assets/shape_arrow7';
import { ShapeDiamond } from '../../assets/shape_diamond';
import { ShapeEllipse } from '../../assets/shape_ellipse';
import { ShapeHeart } from '../../assets/shape_heart';
import { ShapeHexagon } from '../../assets/shape_hexagon';
import { ShapeMoon } from '../../assets/shape_moon';
import { ShapeOctagon } from '../../assets/shape_octagon';
import { ShapePentagon } from '../../assets/shape_pentagon';
import { ShapeRoundSquare } from '../../assets/shape_round_square';
import { ShapeSpade } from '../../assets/shape_spade';
import { ShapeSquare } from '../../assets/shape_square';
import { ShapeStain } from '../../assets/shape_stain';
import { ShapeStar } from '../../assets/shape_star';
import { ShapeTriangle } from '../../assets/shape_triangle';
import { ShapeProps } from '../../assets/ShapeAsset';


interface Props {
    onChangeShape: (shape: React.ComponentType<ShapeProps>) => void
}

const ShapeController: React.FC<Props> = ({ onChangeShape }) => {
    const shapeSize = '20px';
    const shapes = [ShapeArrow1, ShapeArrow2, ShapeArrow3, ShapeArrow4, ShapeArrow5, ShapeArrow6, ShapeArrow7, ShapeArrow8, ShapeClover, ShapeDiamond, ShapeEllipse,
        ShapeHeart, ShapeHexagon, ShapeMoon, ShapeOctagon, ShapePentagon, ShapeRoundSquare, ShapeSpade, ShapeSquare, ShapeStain, ShapeStar, ShapeTriangle
    ];
    return (
        <ControllerWrapper title="도형">
            <ControlGroup>
                <ControlItem style={{ display: 'block', height: 'auto' }}>
                    {shapes.map(Shape => (
                        <Shape width={shapeSize} height={shapeSize} onClick={onChangeShape.bind(null, Shape)} style={{ cursor: 'pointer' }} />
                    ))}
                </ControlItem>
            </ControlGroup>
        </ControllerWrapper>
    )
}

export default optional(ShapeController);