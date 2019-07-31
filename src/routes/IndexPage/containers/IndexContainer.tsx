import * as React from 'react';
import Header from '../components/Header';
import SignModal from '../components/SignModal';
import './style.css';
import { FullPage, Section } from '../components/page';
import { FirstSection } from '../components/section/FirstSection';

const IndexContainer: React.FC = () => {
    const [visibleModal, setVisibleModal] = React.useState(false);
    return (
        <>
            <Header />
            <SignModal visible={visibleModal} />
            <FullPage>
                <FirstSection />
                <Section>
                    bbb
                </Section>
            </FullPage>
        </>
    )
}

export default IndexContainer;