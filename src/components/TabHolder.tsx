import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`
const Tab = styled.div`
    ${(props: { active: boolean }) => props.active && `

    `}
`

export type TabItem = {
    name: string
    id: string
}

interface Props {
    tabList: TabItem[]
    selectedTab?: string
    onSelectTab: (tab: string) => void
}

export const TabHolder: React.FC<Props> = ({ tabList, selectedTab, onSelectTab }) => {
    const onClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const tab = e.target as HTMLElement;
        const tabId = tab.dataset.id;
        if (!!tabId) {
            onSelectTab(tabId);
        }
    }, []);
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