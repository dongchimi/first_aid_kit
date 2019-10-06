import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "mobx-react";
import * as serviceWorker from './serviceWorker';
import rootStore from "./AppStore";

ReactDOM.render(<Provider rootStore={rootStore}>
        <App/>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
