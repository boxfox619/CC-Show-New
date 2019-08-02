import * as React from 'react';
import Header from '../components/Header';
import SignModal from '../components/SignModal';
import './style.css';
import { FullPage } from '../components/page';
import { FirstSection } from '../components/section/FirstSection';
import { SecondSection } from '../components/section/SecondSection';
import { ThirdSection } from '../components/section/ThirdSection';
import { FourthSection } from '../components/section/FourthSection';

const IndexContainer: React.FC = () => {
    const [visibleModal, setVisibleModal] = React.useState(false);
    return (
        <>
            <Header />
            <SignModal visible={visibleModal} />
            <FullPage>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
            </FullPage>
        </>
    )
}

export default IndexContainer;