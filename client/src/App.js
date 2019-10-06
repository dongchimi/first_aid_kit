import React from 'react';
import './App.css';
import AppRoutes from "./router";
import {withCookies} from "react-cookie";

function App() {
    return (
        <div className="App">
            <div className={"App-main"}>
                <AppRoutes/>
            </div>
        </div>
    );
}

export default withCookies(App);
