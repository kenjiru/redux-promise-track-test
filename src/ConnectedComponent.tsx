import * as React from 'react';
import {connect} from "react-redux";

import {IStore} from "./model/store";
import {GET_DATA} from "./model/actions";
import {ILoadingState} from "redux-promise-track";
import {getLoadingState} from "redux-promise-track";

class ConnectedComponent extends React.Component<IConnectedComponentProps, IConnectedComponentState> {
    public componentWillReceiveProps(nextProps: IConnectedComponentProps) {
        console.log("ConnectedComponent.componentWillReceiveProps");
        console.log(nextProps);
    }

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
        if (this.props.loadingState.isLoading) {
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

export default connect((state: IStore): IConnectedComponentProps => {
    console.log("connect");

    return {
        foo: state.data.foo,
        bar: state.data.bar,
        loadingState: getLoadingState(state, GET_DATA)
    }
})(ConnectedComponent);
