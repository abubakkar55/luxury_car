import React, { useEffect, useState } from 'react'
import Reviews from './../components/Reviews/Reviews';
import Banner from './../components/Banner/Banner';
import MakeAdmin from './../components/MakeAdmin/MakeAdmin';
import "./dashboard.css"
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useMongoFirebase from '../Hooks/useMongoFirebase';
import axios from 'axios';
import WelcomeDashboard from './../components/WelcomeDashboard/WelcomeDashboard';
import LogOut from './../components/LogOut/LogOut';
import ManageUserOrders from './../components/ManageUserOrders/ManageUserOrders';
import ManageAllOrders from './../components/ManageAllOrders/ManageAllOrders';
import ManageProducts from './../components/ManageProducts/ManageProducts';
import AddReview from './../components/AddReview/AddReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import Header from './../components/shared/Header/Header';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);




    let { path, url } = useRouteMatch();

    const { firebaseContext: { firebaseData } } = useMongoFirebase();
    const [isAdmin, setIsAdmin] = useState(false);

    // get all user data
    useEffect(() => {
        axios.get(`https://fierce-everglades-12105.herokuapp.com/test_email/${firebaseData?.email}`)
            .then(res => {
                setIsAdmin(res.data);
            })

    }, [firebaseData.email]);
    return (
        <div className="relative">

            <div className="block lg:hidden">
                <span onClick={toggleMenu} className="z-10 absolute top-6 bg-white left-10 px-6 py-2 shadow cursor-pointer ">
                    <FontAwesomeIcon className="text-2xl" icon={isOpen ? faTimes : faBars} />
                </span>
            </div>

            <div className="flex justify-between">
                <div className={`${isOpen ? "dashboard-active" : ""} dashboard-navbar w-1/2 md:w-1/5  overflow-y-auto h-screen bg-gradient-to-tr from-orange-400  to-orange-600`}>
                    <ul className="py-24 px-10 text-white font-lg flex flex-col gap-y-4">
                        <li>
                            <Link to={`${url}/manage_orders`}> Manage Orders </Link>
                        </li>

                        <li>
                            <Link to={`${url}/add_review`}> Review </Link>
                        </li>

                        <li>
                            <Link to={`${url}/pay`}> Pay </Link>
                        </li>

                        <li>
                            <Link to={`${url}/logout`}> Logout </Link>
                        </li>
                        {
                            isAdmin?.admin &&
                            <>
                                <li>
                                    <Link to={`${url}/make_admin`}>Make an Admin</Link>
                                </li>

                                <li>
                                    <Link to={`${url}/manage_products`}> Manage products </Link>
                                </li>

                                <li>
                                    <Link to={`${url}/manage_all_orders`}>  Manage All Orders </Link>
                                </li>

                                <li>
                                    <Link to={`${url}/add_product`}>  Add Product </Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <div className="w-4/5 px-10">
                    <Switch>
                        <Route exact path={path}>
                            <WelcomeDashboard />
                        </Route>

                        <Route path={`${path}/manage_orders`}>
                            <ManageUserOrders />
                        </Route>

                        <Route path={`${path}/manage_all_orders`}>
                            <ManageAllOrders />
                        </Route>

                        <Route path={`${path}/make_admin`}>
                            <MakeAdmin />
                        </Route>

                        <Route path={`${path}/manage_products`}>
                            <ManageProducts />
                        </Route>

                        <Route path={`${path}/add_review`}>
                            <AddReview />
                        </Route>

                        <Route path={`${path}/logout`}>
                            <LogOut />
                        </Route>


                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
