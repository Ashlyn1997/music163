// react-router-dom 集中式配置路由映射
// 配置路由映射
import { Redirect } from 'react-router-dom'
import Discover from "../pages/discover";
import Mine from "../pages/mine";
import Friend from "../pages/friend";

/*import TopList from '../pages/discover/child-pages/toplist'
import Recommend from "../pages/discover/child-pages/recommend";
import Album from "../pages/discover/child-pages/album";
import Djradio from '../pages/discover/child-pages/djradio'
import Artist from '../pages/discover/child-pages/artist'
import Songs from '../pages/discover/child-pages/songs'*/

const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to='/discover' />
    },
    {
        path: '/discover',
        component: Discover,
        /*routes: [
            { path: '/discover', render: () => <Redirect to="/discover/recommend" /> },
            { path: '/discover/recommend', component: Recommend},
            { path: '/discover/ranking', component: TopList },
            { path: '/discover/album', component: Album},
            { path: '/discover/djradio', component: Djradio },
            { path: '/discover/artist', component: Artist },
            { path: '/discover/songs', component: Songs }
        ]*/
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/friend',
        component: Friend
    }
]

export default routes