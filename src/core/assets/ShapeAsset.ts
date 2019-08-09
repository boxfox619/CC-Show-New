import { BackgroundColorProperty, BorderColorProperty, BorderWidthProperty, WidthProperty, HeightProperty } from 'csstype';

export interface ShapeProps {
    width: WidthProperty<any>
    height: HeightProperty<any>
    backgroundColor?: BackgroundColorProperty
    borderColor?: BorderColorProperty
    borderWidth?: BorderWidthProperty<any>
    onClick?: () => void,
    style?: React.CSSProperties
}