declare module "redux-promise-track" {
    export let promiseTrackReducer: any;
    export let promiseTrackMiddleware: any;
    export let getLoadingState: (state: any, actionType: string, actionId?: string) => ILoadingState;
    export let getItemLoadingState: (actionState: any, actionId: string) => ILoadingState;
    export let removeLoadingState: (actionType: string, actionId?: string|string[]) => void;
    export let removeLoadingStates: (actionTypes: string[]) => void;

    export interface ILoadingState {
        isLoading?: boolean;
        isSuccess?: boolean;
        error?: any;
        meta?: any;
    }
}
