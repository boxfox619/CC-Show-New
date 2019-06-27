import * as React from 'react';

interface Props {
    visible?: boolean
}

export const optional = <P extends object>(Component: React.ComponentType<P>): React.FC<Props & P> => ({ visible = true, ...props }) => {
    return visible ? (<Component {...props as P} />) : (<></>);
}