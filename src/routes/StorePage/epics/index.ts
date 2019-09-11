import { Observable, of, concat, from } from 'rxjs';
import { concatMap, map, catchError, throttleTime, timeout } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { SEARCH, searchStart, searchSuccess, searchFail } from '../reducers/shop';
import { PayloadAction } from '@/models/payload';
import { UseCases } from '@/core/domain/index';
import { StoreModel } from '../models';
import { AssetShopItem } from '@/models';

const searchEpic: Epic<PayloadAction<string>, PayloadAction<string>, StoreModel, UseCases> = (
    action: Observable<PayloadAction<string>>,
    state,
    { shopApi }
): Observable<PayloadAction<any>> => action.pipe(
    ofType(SEARCH),
    throttleTime(3000),
    concatMap(($action: PayloadAction<string>) => concat(
        of(searchStart()),
        from(shopApi.search($action.payload)).pipe(
            timeout(15000),
            map((res: AssetShopItem[]) => searchSuccess(res)),
            catchError(err => of(searchFail(err)))
        )
    ))
);

export default [searchEpic];