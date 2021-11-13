import React from 'react'
import Reviews from './../components/Reviews/Reviews';
import Banner from './../components/Banner/Banner';
import MakeAdmin from './../components/MakeAdmin/MakeAdmin';
import {
Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>

            <div>

                <div>

                    <ul>
                        <li>
                            <Link to={`${url}/products`}>Products </Link>
                        </li>
                        <li>
                            <Link to={`${url}/make_admin`}>Make an Admin</Link>
                        </li>
                        <li>
                            <Link to={`${url}/props-v-state`}>Props v. State</Link>
                        </li>
                    </ul>
                </div>
                <div>

                    <Switch>
                        <Route exact path={path}>
                            <Reviews />
                        </Route>

                        <Route path={`${path}/products`}>
                            <Banner />
                        </Route>

                        <Route path={`${path}/make_admin`}>
                            <MakeAdmin />
                        </Route>

                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
