import React, {memo} from "react";
import { Redirect } from "react-router-dom";
import AppNavBar from "../../components/nav-bar";
import {Route, Switch} from "react-router-dom";
import Recommend from "./child-pages/recommend";
import Album from "./child-pages/album";
import Toplist from './child-pages/toplist'
import Songs from './child-pages/songs'
import Djradio from './child-pages/djradio'
import Artist from './child-pages/artist'

export default memo(function Discover(props) {
    // const { route } = props
    return (
        <div style={{width: '100%'}}>
            {/*导航栏*/}
            <AppNavBar />
            {/*对应的内容*/}
            <Switch>
                <Route path='/discover/recommend' component={Recommend} />
                <Route path='/discover/ranking' component={Toplist}/>
                <Route path='/discover/songs' component={Songs} />
                <Route path='/discover/djradio' component={Djradio} />
                <Route path='/discover/artist' component={Artist} />
                <Route path='/discover/album' component={Album} />
                <Redirect to="/discover/recommend" />
            </Switch>
        </div>
    )
})