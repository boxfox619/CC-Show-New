import * as React from 'react';
import Header from '../components/Header';
import SignModal from '../components/SignModal';
import './style.css';

const IndexContainer: React.FC = () => {
    return (
        <>
            <Header />
            <SignModal />
        </>
    )
}

export default IndexContainer;