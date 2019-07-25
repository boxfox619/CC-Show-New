import * as React from 'react';
import styled from 'styled-components';
import { optional } from '../../../../../core/hoc';

const Container = styled.div`
    display: flex;
    border: 1px solid #5a84b3;
    border-radius: 20px;
    padding: 3px 5px 3px 5px;
    margin: 3px;
    height: 20px;
    ${(props: { useLabel: boolean }) => props.useLabel && `
        & > *:nth-child(2) {
            flex: 1;
            width: 0;
            margin-top: -1px;
        }
    `}
`
const TitleLabel = styled.div`
    border: 0;
    margin: 0 0 0 5px;
    font-size: 15px;
    color: #5a84b3;
    display: flex;
    align-items: center;
`

const Title = optional(TitleLabel)

interface Props {
    label?: any,
    onClick?: (e: React.MouseEvent) => void,
    style?: React.CSSProperties
}

export const ControlItem: React.FC<Props> = ({ label, children, onClick, style }) => {
    const titleContent = (typeof label === 'string') ? `${label} :` : label;
    return (
        <Container onClick={onClick} style={style} useLabel={!!label}>
            <Title visible={label}>{titleContent}</Title>
            {children}
        </Container>
    )
}

export const toControlItem = <P extends object>(Item: React.ComponentType<P>): React.FC<Props & P> => ({ label, ...props }) => {
    return (
        <ControlItem label={label}>
            <Item {...props as P} />
        </ControlItem>
    )
}