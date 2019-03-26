export class Action<T> {
    constructor(
        public type: string,
        public payload: T
    ){}
}

export const createActionCreator = <T>(type: string) => (payload: T) => new Action<T>(type, payload);