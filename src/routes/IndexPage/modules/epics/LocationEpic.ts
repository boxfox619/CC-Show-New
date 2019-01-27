import { Action } from 'redux';
import { ofType, StateObservable } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, throttleTime, delay } from 'rxjs/operators';
import { GET_LOCATION, GET_LOCATION_FAILED, GET_LOCATION_STARTED, GET_LOCATION_SUCCESSED } from '../location';

function getLocation() {
    return new Observable(obs => {
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
    action$: Observable<Action>,
    state$: StateObservable<any>
): Observable<Action> => {
    return action$.pipe(
        ofType(GET_LOCATION),
        map(() => ({ type: GET_LOCATION_STARTED })),
        switchMap(() =>
            getLocation().pipe(
                delay(2000),
                map((position) => ({ type: GET_LOCATION_SUCCESSED, position })),
                catchError(error => of({ type: GET_LOCATION_FAILED, error }))
            )),
        throttleTime(1000)
    )
};

export default [getLocationEpic];