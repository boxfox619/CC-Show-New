import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: right;
    display: table;
    table-layout: fixed;
    height: 25px;
`
const Tab = styled.div`
    display: table-cell;
    position: relative;
    text-align: center;
    font-weight: bold;
    font-size: 0.8em;
    line-height: 25px;
    color: #D1DBE1;
    ${(props: { active: boolean }) => props.active && `
        color: #12AAEB;
        &:after {
            content: '';
            height: 0px;
            left: 10px;
            bottom: -10px;
            position: absolute;
            display: inline-block;
            border-bottom: 3px solid #12AAEB;
            width: calc(100% - 20px);
        }
    `}
    &:hover {
        color: #12AAEB;
        cursor: pointer;
    }
    &:hover:after {
        content: '';
        height: 0px;
        left: 10px;
        bottom: -10px;
        position: absolute;
        display: inline-block;
        border-bottom: 3px solid #12AAEB;
        width: calc(100% - 20px);
    }
    &:before {
        content: '';
        left: 0px;
        height: 100%;
        position: absolute;
        display: inline-block;
        border-left: 1px dashed #D1DBE1;
    }
    &:first-child:before {
        display: none;
        border-left-width: 0px;
    }
`

export type TabItem = {
    name: string
    id: string
}

interface Props {
    tabList: TabItem[]
    onSelectTab?: (tab: string) => void
}

export const TabHolder: React.FC<Props> = ({ tabList, onSelectTab }) => {
    const [selectedTab, selectTab] = React.useState(tabList[0].id);
    const onClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const tab = e.target as HTMLElement;
        const tabId = tab.dataset.id;
        if (!tabId) { return; }
        selectTab(tabId);
        if (!onSelectTab) { return; }
        onSelectTab(tabId);
    }, [selectTab, onSelectTab]);
    return (
        <Container onClick={onClick}>
            {tabList.map(tab => (
                <Tab data-id={tab.id}
                    key={tab.id}
                    active={tab.id === selectedTab}>
                    {tab.name}
                </Tab>
            ))}
        </Container>
    )
}