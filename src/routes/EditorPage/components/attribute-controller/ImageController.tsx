import * as React from 'react';
import ControllerWrapper from './control/ControllerWrapper';
import { TextControlItem } from './Input';
import { optional } from '../../../../core/hoc';

interface Props {
    image: string,
    onChangeValue: (value: string) => void
}

const ImageController: React.FC<Props> = ({ image, onChangeValue }) => {
    const onChangeImage = React.useCallback((url: string) => onChangeValue(url), [onChangeValue]);
    return (<>
        <ControllerWrapper title="이미지">
            <TextControlItem label="URL" value={image} onValueChange={onChangeImage} />
        </ControllerWrapper>
    </>)
}

export default optional(ImageController);