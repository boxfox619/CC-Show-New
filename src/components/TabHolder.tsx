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
    padding: 0 10px;
    color: #D1DBE1;
    ${(props: { active: boolean }) => props.active && `
        color: #12AAEB;
        &:after {
            content: '';
            position: absolute;
            display: inline-block;
            bottom: -10px;
            left: 20px;
            border-bottom-style: solid;
            border-bottom-width: 3px;
            border-color: #12AAEB;
            width: calc( 100% - 40px );
            height: 0px;
        }
    `}
    &:hover {
        color: #12AAEB;
        cursor: pointer;
    }
    &:hover:after {
        content: '';
        position: absolute;
        display: inline-block;
        bottom: -10px;
        left: 20px;
        border-bottom-style: solid;
        border-bottom-width: 3px;
        border-color: #12AAEB;
        width: calc( 100% - 40px );
        height: 0px;
    }
    &:before {
        content: '';
        position: absolute;
        display: inline-block;
        left: 0px;
        border-left-style: dashed;
        border-left-width: 1px;
        border-color: #D1DBE1;
        height: 100%;
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