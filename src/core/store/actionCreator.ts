export class Action<T> {
  constructor(public type: string, public payload: T) {}
}

export const createActionCreator = <T>(type: string) => (payload: T) => ({type, payload});
export const createEmptyActionCreator = (type: string) => () => ({ type });
