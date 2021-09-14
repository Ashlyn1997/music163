import React, {memo} from 'react'
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import AppPlayerBar from './pages/player/app-player-bar'
import AppWrapper from './pages/app'
import {HashRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import routes from "./router";

import { Provider } from "react-redux";
import store from "./store";

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppHeader/>
                <AppWrapper/>
                <AppFooter/>
                <AppPlayerBar/>
            </HashRouter>
        </Provider>
    )
})

