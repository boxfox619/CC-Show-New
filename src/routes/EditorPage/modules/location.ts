export const GET_LOCATION = 'LOCATION.GET_LOCATION';
export const GET_LOCATION_SUCCESSED = 'LOCATION.GET_LOCATION_SUCCESSED';
export const GET_LOCATION_FAILED = 'LOCATION.GET_LOCATION_FAILED';
export const GET_LOCATION_STARTED = 'LOCATION.GET_LOCATION_STARTED';

export const getCurrentLocation = () => ({type: GET_LOCATION});

export const ACTION_HANDLERS = {
    [GET_LOCATION_STARTED]: (state:any, action: any) => ({gps: {progress: {$set: true}}}),
    [GET_LOCATION_SUCCESSED] : (state: any, action: any) => ({gps: {progress: {$set: false}, position: {$set: action.position}}}),
    [GET_LOCATION_FAILED] : (state: any, action: any) => ({gps: {progress: {$set: false}, error: {$set: action.error}}})
}