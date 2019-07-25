import * as React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 10%;
`
const Thumbnail = styled.div`
    border-radius: 50%;
    width: 3em;
    height: 3em;
    display: inline-block;
    overflow: hidden;
    position: relative;
    margin-right: 10px;
    & > img {
        position: absolute;
        width: 3em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
const Name = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    background: linear-gradient(to right, #fc00ff, #00dbde);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const SubName = styled.div`
    font-size: 0.5em;
    color: #94a8ba;
`

interface Props {
    name: string,
    subName: string,
    thumbnail: string
}

const Profile: React.FC<Props> = (props: Props) => {
    return (
        <ProfileContainer>
            <Thumbnail><img src={props.thumbnail} alt="thumbnail" /></Thumbnail>
            <div>
                <Name>{props.name}</Name>
                <SubName>{props.subName}</SubName>
            </div>
        </ProfileContainer>
    )
}

export default Profile;