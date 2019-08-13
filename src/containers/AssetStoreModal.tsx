import * as React from 'react';
import { Modal } from '@/components';
import styled from 'styled-components';
import { TabHolder, TabItem } from '@/components/TabHolder';
import { AnyAsset } from '@/models';

const Header = styled.div`

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
    assets: AnyAsset[]
}

export const AssetStoreModal: React.FC<Props> = ({ assets }) => {
    const onSelectTab = React.useCallback((tabId: string) => { }, []);
    return (
        <Modal>
            <Header>
                <h1>ASSET STORE</h1>
                <TabHolder tabList={TAB_LIST} onSelectTab={onSelectTab} />
            </Header>
            <Content>
                <div style={{ 'padding': '20px 2.5%' }}>
                    {
                        assets.map((asset) => (
                            <AssetItem key={asset.id}
                                deleteAsset={() => this.deleteAsset(asset.id)}
                                useAsset={() => this.useAsset(asset.id)}
                                id={asset.id}
                                title={asset.title}
                                subTitle={asset.user}
                                star={asset.star}
                                thumbnail={asset.thumbnail} />))
                    }
                </div>
            </Content>
        </Modal>
    )
}