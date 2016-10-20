import * as React from 'react';
import ConnectedComponent from "./ConnectedComponent";
import {IDispatchFunction} from "./util/ActionUtil";
import {connect} from "react-redux";
import {getData} from "./model/actions";

class ParentComponent extends React.Component<IParentComponentProps, IParentComponentState> {
    constructor(props: IParentComponentProps) {
        super(props);

        this.state = {
            foo: "Initial foo",
            bar: "Initial bar"
        };
    }

    render() {
        return (
            <div className="ParentComponent">
                <ConnectedComponent foo={this.state.foo} bar={this.state.bar}/>
                <button onClick={this.handleUpdate.bind(this)}>Update</button>
                <button onClick={this.handleAsyncUpdate.bind(this)}>Async update</button>
            </div>
        );
    }

    private handleUpdate(): void {
        this.setState({
            foo: "Updated foo",
            bar: "Updated bar"
        });
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
