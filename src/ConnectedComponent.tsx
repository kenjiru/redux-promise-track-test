import * as _ from "lodash";
import * as React from 'react';
import {connect} from "react-redux";

import {IStore} from "./model/store";
import {GET_DATA} from "./model/actions";
import {ILoadingState} from "redux-promise-track";
import {getLoadingState} from "redux-promise-track";

class ConnectedComponent extends React.Component<IConnectedComponentProps, IConnectedComponentState> {
    render() {
        return (
            <div className="connected-component">
                <div>Connected Component</div>
                <div>Foo: {this.props.foo}</div>
                <div>Bar: {this.props.bar}</div>
                {this.renderLoading()}
            </div>
        );
    }

    private renderLoading(): React.ReactElement<any> {
        if (this.props.loadingState && this.props.loadingState.isLoading) {
            return (
                <div>Loading...</div>
            );
        }
    }
}

interface IConnectedComponentProps {
    foo?: string;
    bar?: string;
    loadingState?: ILoadingState;
}

interface IConnectedComponentState {
}

function mapStateToProps<T>(mapState: (state: IStore) => T,
                            mapLoadingState: (state: IStore) => ILoadingStateMap): (state: IStore, ownProps: T) => T {
    return (state: IStore, ownProps: T): T => {
        let loadingStates: ILoadingStateMap = mapLoadingState(state);

        if (isLoading(loadingStates)) {
            return _.merge({}, ownProps, loadingStates);
        }

        return _.merge({}, ownProps, mapState(state), loadingStates);
    }
}

function isLoading(loadingStates: ILoadingStateMap): boolean {
    return _.some(loadingStates, (loadingState: ILoadingState) => loadingState.isLoading);
}

interface ILoadingStateMap {
    [key: string]: ILoadingState
}

export default connect(mapStateToProps<IConnectedComponentProps>(
    (state: IStore): IConnectedComponentProps => ({
            foo: state.data.foo,
            bar: state.data.bar
    }),
    (state: IStore): ILoadingStateMap => ({
            loadingState: getLoadingState(state, GET_DATA)
    })
))(ConnectedComponent);
