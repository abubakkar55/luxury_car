import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import useMongoFirebase from '../Hooks/useMongoFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { firebaseContext: { firebaseData } } = useMongoFirebase();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                firebaseData?.email ?
                    children
                    :
                    (
                        <Redirect
                            to={{
                                pathname: "/register",
                                state: { from: location }
                            }}

                        />
                    )
            }
        />

    )
}

export default PrivateRoute
