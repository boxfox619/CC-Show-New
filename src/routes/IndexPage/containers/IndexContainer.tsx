import * as React from 'react';
import Header from '../components/Header';
import SignModal from '../components/SignModal';
import './style.css';
import { FullPage } from '../components/page';
import { FirstSection } from '../components/section/FirstSection';
import { SecondSection } from '../components/section/SecondSection';
import { ThirdSection } from '../components/section/ThirdSection';
import { FourthSection } from '../components/section/FourthSection';
import { login, register } from '../../../reducers/auth';
import StoreModel from '../../EditorPage/models/StoreModel';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    login, register
};

const mapStateToProps = (state: StoreModel) => {
    return {
        auth: state.auth
    }
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const IndexContainer: React.FC<Props> = ({ login, register }) => {
    const [visibleModal, setVisibleModal] = React.useState(false);
    const toggleSignModal = React.useCallback(() => setVisibleModal(!visibleModal), [setVisibleModal, visibleModal]);
    return (
        <>
            <Header />
            <SignModal visible={visibleModal} onSignin={login} onSignup={register} />
            <FullPage>
                <FirstSection onStart={toggleSignModal}/>
                <SecondSection />
                <ThirdSection />
                <FourthSection />
            </FullPage>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);