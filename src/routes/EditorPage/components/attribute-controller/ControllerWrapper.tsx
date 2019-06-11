import * as React from 'react';
import styled from 'styled-components';
import arrowUpIcon from '../../assets/ic_arrow_up.png';
import arrowDownIcon from '../../assets/ic_arrow_down.png';
import ellipseIcon from '../../assets/ic_ellipse_gray.png';


const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
`
const Header = styled.div`
    position: relative;
    margin: 20px 20px 10px 20px;
    font-size: 16px;
    color: #5D87B5;
    font-weight: bold;
    vertical-align: middle;
    display: table;
    &:before {
        content: '';
        display: table-cell;
        vertical-align: middle;
        background: url(${ellipseIcon}) no-repeat left center;
        width: 23px;
    }
`
const FlipButton = styled.img`
    position: absolute;
    cursor: pointer;
    width: 14px;
    margin: 3px;
    right: 0;
    top: calc(50% - 7px);
`
const Items = styled.div`
    display: flex;
    flex-flow: column;
    padding: 0 4%;
    margin: 0;
`

interface Props {
    title: string,
}

const ControllerWrapper: React.FC<Props> = ({ title, children }) => {
    const [flip, setFlip] = React.useState(false);
    const flipHandler = React.useCallback(() => setFlip(!flip), [flip, setFlip]);
    return (
        <Wrapper>
            <Header>
                {title}
                <FlipButton onClick={flipHandler} src={flip ? arrowDownIcon : arrowUpIcon} />
            </Header>
            {!flip && (<Items> {children}</Items>)}
        </Wrapper>
    )
}

export default ControllerWrapper;