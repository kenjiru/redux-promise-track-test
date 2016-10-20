import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers";
import {ILoadingState} from "redux-promise-track";
import {promiseTrackMiddleware} from "redux-promise-track";

export interface IStore {
    data?: IData;
    promiseTrackReducer?: any;
}

export interface IData {
    foo?: string;
    bar?: string;
}

const store: any = applyMiddleware(promiseTrackMiddleware, thunk)(createStore)(mainReducer);

export default store;
