import * as React from 'react';
import ConnectedComponent from "./ConnectedComponent";
import {IDispatchFunction} from "./util/ActionUtil";
import {connect} from "react-redux";
import {getFoo, getBar, getData} from "./model/actions";

class ParentComponent extends React.Component<IParentComponentProps, IParentComponentState> {
    constructor(props: IParentComponentProps) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="ParentComponent">
                <div>Parent Component</div>
                <ConnectedComponent foo={this.state.foo} bar={this.state.bar}/>
                <button onClick={this.handleAsyncUpdate.bind(this)}>Async update</button>
            </div>
        );
    }

    private handleAsyncUpdate(): void {
        this.props.dispatch(getData());
    }
}

interface IParentComponentProps {
    dispatch: IDispatchFunction;
}

interface IParentComponentState {
    foo?: string;
    bar?: string;
}

export default connect()(ParentComponent);
