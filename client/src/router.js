import React from 'react';
import {HashRouter, Redirect, Route} from 'react-router-dom';
import {Switch} from "react-router";
// import {PublicApp} from "./containers/PublicApp/PublicApp";
// import {ConsoleApp} from "./containers/ConsoleApp/ConsoleApp";
// import Page404 from "./containers/Page/404";
import {Provider} from "mobx-react";
import rootStore from "./AppStore";

const AppRoutes = ({history}) => {

    return (
        <Provider {...rootStore}>
            <HashRouter history={history}>
                <div>
                    <Switch>
                        <Route exact path={'/'} render={(props => {
                            return (<Redirect to={{pathname: '/public', state: {from: props.location}}}/>)
                        })}/>
                        {/*<Route exact path={'/public'} component={PublicApp}/>*/}
                        {/*<Route path={'/public'} component={PublicApp}/>*/}
                        {/*<Route exact path={'/console'} component={ConsoleApp}/>*/}
                        {/*<Route exact path={'/404'} component={Page404}/>*/}
                    </Switch>
                </div>
            </HashRouter>
        </Provider>
    );
};


export default AppRoutes;