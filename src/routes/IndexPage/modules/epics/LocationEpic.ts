import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable, of, concat } from 'rxjs';
import { catchError, map, concatMap, throttleTime, delay} from 'rxjs/operators';
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
): Observable<any> => {
    const observable = action.pipe(
        ofType(GET_LOCATION),
        throttleTime(5000),
        concatMap(() => concat(
            of({ type: GET_LOCATION_STARTED }),
            getLocation().pipe(
                delay(2000),
                map((position: any) => ({ type: GET_LOCATION_SUCCESSED, position })),
                catchError(error => of({ type: GET_LOCATION_FAILED, error }))
            )
        ))
    );
    return observable;
};

export default [getLocationEpic];