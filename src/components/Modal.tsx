import * as React from 'react';
import styled from 'styled-components';

const ModalShadow = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 20;
`

const Content = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    z-index: 21;
    background-color: white;
`

export const Modal: React.FC = ({ children }) => {
    return (
        <ModalShadow>
            <Content>
                {children}
            </Content>
        </ModalShadow>
    )
}