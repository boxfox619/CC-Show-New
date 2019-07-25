import * as React from 'react';
import ControllerWrapper from './control/ControllerWrapper';
import { TextControlItem } from './Input';
import { optional } from '../../../../core/hoc';

interface Props {
    value: string,
    onChangeValue: (value: string) => void
}

const VideoController: React.FC<Props> = ({ value, onChangeValue }) => {
    const onChangeUrl = React.useCallback((url: string) => onChangeValue(url), [onChangeValue]);
    return (<>
        <ControllerWrapper title="Youtube">
            <TextControlItem label="URL" value={value} onValueChange={onChangeUrl} />
        </ControllerWrapper>
    </>)
}

export default optional(VideoController);