import * as React from 'react';
import styled from 'styled-components';
import GradientButtonItem from '../components/GradientButtonItem';

const Container = styled.div`
    background-color: white;
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.26);
`

interface OwnProps {
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

export default class ShowControllerContainer extends React.Component<Props>{
    public render() {
        const divProps = this.props as React.HTMLAttributes<HTMLDivElement>;
        return (
            <Container {...divProps}>
                <GradientButtonItem label="" activated={false}/>
            </Container>
        )
    }
}