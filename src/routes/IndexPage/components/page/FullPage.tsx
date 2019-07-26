import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`

const Content = styled.div`
    position: absolute;
    width: 100vw;
    transition-duration: 0.5s;
`

interface Props {

}

const FullPage: React.FC<Props> = ({ children }) => {
    const [position, setPosition] = React.useState(0);
    const changePosition = React.useCallback((delta: number) => {
        const afterPosition = position + delta;
        const childCount = React.Children.count(children);
        if (afterPosition < 0) {
            setPosition(0);
        } else if (afterPosition / 100 > childCount - 1) {
            setPosition((childCount - 1) * 100);
        } else {
            setPosition(afterPosition);
        }
    }, [children, setPosition, position]);
    const handleScroll = React.useCallback((e: React.WheelEvent) => changePosition((e.deltaY > 0) ? 100 : -100), [changePosition]);
    const handleKey = React.useCallback((e: React.KeyboardEvent) => {
        e.key === 'ArrowUp' && changePosition(-100);
        e.key === 'ArrowDown' && changePosition(100);
    }, [changePosition]);
    return (
        <Wrapper onWheel={handleScroll} onKeyDown={handleKey} tabIndex={0} >
            <Content style={{ top: `${-position}vh` }} >
                {children}
            </Content>
        </Wrapper>
    )
}

export default FullPage;