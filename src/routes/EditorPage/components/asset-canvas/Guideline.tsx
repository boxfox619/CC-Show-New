import * as React from 'react';
import GuidelineModel from '../../models/Guideline';
import styled from 'styled-components';
import { THEME_COLOR } from '../../../../util/constant';

const Line = styled.div`
    position: absolute;
    ${(props: { vertical: boolean }) => props.vertical ? `
        height: 2px;
        width: 2px;
        border-left: dashed ${THEME_COLOR} 2px;
    ` : `
        width: 2px;
        height: 2px;
        border-top: dashed ${THEME_COLOR} 2px;
    `}
`

interface Props {
    attr: GuidelineModel
}

export const Guideline: React.FC<Props> = (props) => {
    const vertical = (!!props.attr.height);
    return (<Line vertical={vertical} style={props.attr.style} />);
}