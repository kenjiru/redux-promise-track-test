import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import store from "./model/store";

import './App.less';
import ParentComponent from "./ParentComponent";

class App extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <h1>Redux test app</h1>
                    <ParentComponent/>
                </div>
            </Provider>
        );
    }
}

interface IAppProps {
}

interface IAppState {
}

ReactDOM.render(<App/>, document.body);
