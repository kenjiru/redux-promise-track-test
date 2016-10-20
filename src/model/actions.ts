import {IAction, createAction, IActionCallback, IDispatchFunction} from "../util/ActionUtil";

export const GET_DATA: string = "GET_DATA";
export function getData(): IActionCallback {
    return (dispatch: IDispatchFunction): Promise<any> => {
        return dispatch(createAction(GET_DATA, Promise.all([
                dispatch(getFoo()),
                dispatch(getBar())
            ])
        ));
    };
}

export const GET_FOO: string = "GET_FOO";
export function getFoo(): IActionCallback {
    return (dispatch: IDispatchFunction): Promise<any> => {
        return newPromise("foo", 1000).then((result: string) => {
            return dispatch(createAction(GET_FOO, result));
        });
    };
}


export const GET_BAR: string = "GET_BAR";
export function getBar(): IActionCallback {
    return (dispatch: IDispatchFunction): any => {
        return newPromise("bar", 3000).then((result: string) => {
            return dispatch(createAction(GET_BAR, result));
        });
    };
}

function newPromise(value: string, timeout: number): Promise<string> {
    return new Promise((success: Function, fail: Function) => {
        setTimeout(() => {
            success(value);
        }, timeout);
    })
}
