import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable, of, concat } from 'rxjs';
import { catchError, map, switchMap, throttleTime } from 'rxjs/operators';
import { GET_LOCATION, GET_LOCATION_FAILED, GET_LOCATION_STARTED, GET_LOCATION_SUCCESSED } from '../location';

interface PositionType {latitude: number, longitude: number};

function getLocation() {
    return new Observable<PositionType>(obs => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                obs.next({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                obs.complete();
            },
            (error) => obs.error(error),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            });
    });
}

const getLocationEpic = (
    action: Observable<Action>
): Observable<Action> => {
    return action.pipe(
        ofType(GET_LOCATION),
        switchMap(() => new Observable<Action>(obs => {
            obs.next({ type: GET_LOCATION_STARTED }),
            getLocation().pipe(
                map(position => ({ type: GET_LOCATION_SUCCESSED, position })),
                catchError(error => of({ type: GET_LOCATION_FAILED, error }))
            )
        })
        ),
        throttleTime(1000)
    );
};

export default [getLocationEpic];