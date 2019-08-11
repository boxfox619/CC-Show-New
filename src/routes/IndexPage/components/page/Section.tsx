import * as React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;
    font-size: 1em;
    color: white;
    line-height: 1.4em;
`

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

export default Section;