import * as React from 'react';
import styled from 'styled-components';
import GradientButtonItem from '../components/GradientButtonItem';

const Container = styled.div`
    background-color: white;
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.26);
    height: 100%;
    display: inline-block;
`

const ButtonGroup = styled.div`
    padding: 20px;
    display: flex;
    flex-flow: column;
    width: 200px;
    & > * {
        margin-bottom: 5px;
    }
`

const SplitBar = styled.div`
    display: block;
    height: 1.5px;
    background-color: rgba(33,33,33,0.1);
    width: 40px;
    margin-left: 20px;
`

interface OwnProps {
    test?: boolean
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

export default class ShowControllerContainer extends React.Component<Props>{
    public render() {
        const divProps = this.props as React.HTMLAttributes<HTMLDivElement>;
        return (
            <Container {...divProps}>
                <ButtonGroup>
                    <GradientButtonItem label="텍스트" />
                    <GradientButtonItem label="비디오" />
                    <GradientButtonItem label="이미지" />
                    <GradientButtonItem label="도형" />
                    <GradientButtonItem label="기타" />
                </ButtonGroup>
                <SplitBar/>
                <ButtonGroup>
                    <GradientButtonItem label="슬라이드 리스트" />
                    <GradientButtonItem label="슬라이드 쇼" />
                </ButtonGroup>
            </Container>
        )
    }
}