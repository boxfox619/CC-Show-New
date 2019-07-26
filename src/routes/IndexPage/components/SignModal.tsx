import * as React from 'react';
import * as Form from './form';
import styled from 'styled-components';
import { optional } from './../../../core/hoc/OptionalComponent';
import { SigninPayload } from '../models/SigninPayload';
import { SignupPayload } from '../models/SignupPayload';
import loginBackground from '../assets/bg_login_img.jpg';
import logoIcon from '../assets/ic_cc_show.png';

const ModalShadow = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
`

const Content = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    z-index: 21;
    background-color: white;
    display: flex;
    & > * {
        flex: 1;
    }
`

const LeftContainer = styled.div`
    background: url(${loginBackground});
    background-position: center;
    background-size: cover;
    position: relative;
    color: white;
    overflow: hidden;
    & > * {
        position: absolute;
    }
    &::before {
        content: ' ';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: absolute;
    }
`

const Logo = styled.img`
    height: 20px;
    margin: 20px;
`

const Tags = styled.div`
    font-size: 30px;
    line-height: 1.5em;
    font-family: 'NanumSquareEB';
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

const SigninForm = optional(Form.SigninForm);
const SignupForm = optional(Form.SignupForm);

const SignModal: React.FC = () => {
    const [signup, setSignup] = React.useState(false);
    const handleSignin = React.useCallback((data: SigninPayload) => { }, []);
    const handleSignup = React.useCallback((data: SignupPayload) => { }, []);
    return (
        <ModalShadow>
            <Content>
                <LeftContainer>
                    <Logo src={logoIcon} />
                    <Tags>
                        <div>#쉽게  #편리하게</div>
                        <div>#화려하게  #빠르게</div>
                    </Tags>
                </LeftContainer>
                <div>
                    <SigninForm visible={!signup} onSubmit={handleSignin} />
                    <SignupForm visible={signup} onSubmit={handleSignup} />
                </div>
            </Content>
        </ModalShadow>
    )
}

export default SignModal;