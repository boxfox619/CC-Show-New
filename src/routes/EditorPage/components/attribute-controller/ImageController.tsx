import * as React from 'react';
import ControllerWrapper from './control/ControllerWrapper';
import { TextControlItem } from './Input';
import { optional } from 'src/core/hoc';

interface Props {
    style: React.CSSProperties,
    onChangeStyle: (style: React.CSSProperties) => void
}

const ImageController: React.FC<Props> = ({ style, onChangeStyle }) => {
    const onChangeImage = React.useCallback((url: string) => onChangeStyle(({ ...style, backgroundImage: 'url(${url})' })), [style, onChangeStyle]);
    return (<>
        <ControllerWrapper title="이미지">
            <TextControlItem label="Url" value={style.backgroundImage} onValueChange={onChangeImage} />
        </ControllerWrapper>
    </>)
}

export default optional(ImageController);