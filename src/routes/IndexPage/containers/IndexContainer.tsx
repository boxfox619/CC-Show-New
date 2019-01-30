import { History, Location } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import { getCurrentLocation } from './../modules/location';

interface Props {
    history: History,
    location: Location,
    match: match,
    gps: {
        position?: { longitude: any, latitude: any },
        progress: boolean
    },
    getCurrentLocation: any
}

class IndexContainer extends React.Component<Props> {
    public render() {
        const {position, progress} = this.props.gps;
        return (
            <div>
                {progress && 'Getting location...'}
                {!progress && position && `latitude ${position.latitude}, longitude: ${position.longitude}`}
                <button onClick={this.props.getCurrentLocation}>get location</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getCurrentLocation
};

const mapStateToProps = (state: any) => {
    return {
        gps: state.index.gps
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)