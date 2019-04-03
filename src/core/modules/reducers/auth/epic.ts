import { Action } from 'redux';
import { Observable, of, concat, from } from 'rxjs';
import { concatMap, map, catchError, throttleTime } from 'rxjs/operators';
import { ofType } from 'redux-observable';

const loadReviewListEpic = (
    action: Observable<Action>
): Observable<any> => {
    const observable = action.pipe(
        ofType(LOAD),
        throttleTime(1000),
        concatMap(($action: any) => concat(
            of({ type: LOAD_STARTED }),
            from(loadComments($action.shopId, $action.page, 10)).pipe(
                map((data: CommentModel[]) => ({ type: LOAD_SUCCESS, data, page: $action.page, clear: $action.clear })),
                catchError(error => of({ type: LOAD_FAILED, error }))
            )
        ))
    );
    return observable;
};

export default [];