import * as React from 'react';
import styled from 'styled-components';

const IconButtonContainer = styled.img`
    font-size: 1.5rem;
    width: 0.6em;
    color: white;
    position: relative;
    margin: 3px 5px 0 5px;
    transition: transform 0.3s ease;
    &:hover {
        background-color: transparent;
        transform: rotate(90deg);
        cursor: pointer;
    }
`

interface OwnProps {
    icon: string
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

const IconButton: React.FC<Props> = (props: Props) => {
    const divProps = props as React.HTMLAttributes<HTMLDivElement>;
    return (
        <IconButtonContainer {...divProps} src={props.icon}/>
    )
}

export default IconButton;