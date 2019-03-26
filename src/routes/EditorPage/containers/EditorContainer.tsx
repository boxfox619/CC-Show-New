import { History, Location } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import StoreModel from '../models/store/StoreModel';
import AccountStoreModel from 'src/core/models/store/AccountStoreModel';
import EditorStoreModel from '../models/store/EditorStoreModel';
import styled from 'styled-components';
import ShowControllerContainer from './ShowControllerContainer';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

interface Props {
    history: History,
    location: Location,
    match: match,
    auth: AccountStoreModel,
    editor: EditorStoreModel
}

class EditorContainer extends React.Component<Props> {
    public render() {
        return (
            <Container>
                <ShowControllerContainer/>
            </Container>
        )
    }
}

const mapDispatchToProps = {
};

const mapStateToProps = (state: {account: AccountStoreModel, index: StoreModel}) => {
    return {
        auth: state.account,
        editor: state.index.editor
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)