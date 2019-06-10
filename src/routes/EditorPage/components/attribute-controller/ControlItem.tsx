import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    border: 1px solid #5a84b3;
    border-radius: 20px;
    padding: 3px 5px 3px 5px;
    margin: 3px;
    height: 20px;
    &:nth-child(2) {
        flex: 1;
    }
`
const Title = styled.div`
    border: 0;
    margin: 0 0 0 5px;
    font-size: 15px;
    color: #5a84b3;
    display: flex;
    align-items: center;
`

interface Props {
    label: string
}

export const toControlItem = <P extends object>(ControlItem: React.ComponentType<P>): React.FC<Props & P> => ({ label, ...props }) => {
    return (<Container>
        <Title>{label} :</Title>
        <ControlItem {...props as P} />
    </Container>)
}