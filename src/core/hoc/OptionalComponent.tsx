import * as React from 'react';

interface Props {
    vIf?: boolean
}

export const optional = <P extends object>(Component: React.ComponentType<P>): React.FC<Props & P> => ({ vIf = true, ...props }) => {
    return vIf ? (<Component {...props as P} />) : (<></>);
}