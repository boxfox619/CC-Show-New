import { History, Location } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import StoreModel from '../models/store/StoreModel';
import styled from 'styled-components';
import ShowControllerContainer from '../components/asset/creator/ShowController';
import { addAsset } from '../modules/asset';
import PointModel from 'src/core/models/PointModel';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

interface OwnProps {
    history: History,
    location: Location,
    match: match,
}

const mapDispatchToProps = {
    addAsset
};

const mapStateToProps = (state: StoreModel) => {
    return {
        auth: state.auth,
        editor: state.editor
    }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & OwnProps;

const EditorContainer: React.FC<Props> = (props: Props) => {
    const createAsset = (assetType: string, point: PointModel) => props.addAsset({assetType, point});
    return (
        <Container>
            <ShowControllerContainer
                addAsset={createAsset}
            />
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)