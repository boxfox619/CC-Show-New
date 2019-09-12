import * as React from 'react';
import styled from 'styled-components';
import { TabHolder, TabItem } from '../components/TabHolder';
import { AssetItemCard } from '../components/AssetItemCard';
import { search } from '../reducers/shop';
import { StoreModel } from '../models';
import { connect } from 'react-redux';

const Container = styled.div`
    padding: 25px;    
`

const Header = styled.div`
    display: flex;
    padding: 15px;
    & > h1 {
        flex: 1;
        font-weight: bold;
    }
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

const mapDispatchToProps = {
    search
};

const mapStateToProps = (state: StoreModel) => {
    return {
        loading: state.shop.loading,
        assets: state.shop.assets
    }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const StoreContainer: React.FC<Props> = ({ search, assets = [] }) => {
    const onSelectTab = React.useCallback((tabId: string) => { }, []);
    React.useEffect(() => { search('') }, []);
    return (
        <Container>
            <Header>
                <h1>ASSET STORE</h1>
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
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreContainer);