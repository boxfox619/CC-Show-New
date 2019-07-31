import * as React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;
`
const Content = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
    return (
        <Container {...props}>
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Section;