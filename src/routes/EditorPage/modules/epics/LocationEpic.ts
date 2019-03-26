/* import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable, of, concat } from 'rxjs';
import { catchError, map, concatMap, throttleTime, delay} from 'rxjs/operators';

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

export default [getLocationEpic]; */