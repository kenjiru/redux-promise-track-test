import * as _ from "lodash";

import {IStore, IData} from "./store";
import {IAction} from "../util/ActionUtil";
import {GET_FOO, GET_BAR} from "./actions";
import {promiseTrackReducer} from "redux-promise-track";

export default function mainReducer(store: IStore = defaultStore, action: IAction): IStore {
    return {
        data: dataReducer(store.data, action),
        promiseTrackReducer: promiseTrackReducer(store.promiseTrackReducer, action)
    };
}

const defaultStore: IData = {
    foo: "default store foo",
    bar: "default store bar"
};

function dataReducer(store: IData = {}, action: IAction): IData {
    switch (action.type) {
        case GET_FOO:
            return _.assign({}, store, {
                foo: action.payload
            });

        case GET_BAR:
            return _.assign({}, store, {
                bar: action.payload
            });
    }

    return store;
}