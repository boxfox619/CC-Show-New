import * as React from 'react';
import { Modal } from '@/components';
import styled from 'styled-components';
import { TabHolder, TabItem } from '@/components/TabHolder';
import { AssetItemCard } from '../components/card/AssetItemCard';
import { AssetShopItem } from '../models/asset/AssetShopItem';

const Header = styled.div`
    display: flex;
    padding: 10px;
`
const Content = styled.div`

`
const TAB_LIST: TabItem[] = [
    { name: '추천', id: 'recommend' },
    { name: '신규', id: 'new' },
    { name: '인기', id: 'popular' },
    { name: '찜', id: 'liked' },
    { name: '보관함', id: 'saved' }
];

interface Props {
    assets?: AssetShopItem[]
}

export const AssetStoreModal: React.FC<Props> = ({ assets = [] }) => {
    const onSelectTab = React.useCallback((tabId: string) => { }, []);
    return (
        <Modal>
            <Header>
                <h4 style={{ flex: 1 }}>ASSET STORE</h4>
                <TabHolder tabList={TAB_LIST} onSelectTab={onSelectTab} />
            </Header>
            <Content>
                {assets.map((asset) => (
                    <AssetItemCard
                        key={asset.id}
                        onMark={this.deleteAsset}
                        onClick={this.useAsset}
                        data={asset} />
                ))}
            </Content>
        </Modal>
    )
}