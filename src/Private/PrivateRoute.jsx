import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import useMongoFirebase from '../Hooks/useMongoFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { firebaseContext: { firebaseData, isLoading } } = useMongoFirebase();

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner-img" />
            </div>
        )
    }

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
