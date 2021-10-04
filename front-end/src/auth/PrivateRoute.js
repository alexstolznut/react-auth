import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { useToken } from './useToken';

export default function PrivateRoute(props) {
    const [token] = useToken();

    if (!token) return <Redirect to="/login" />
    return <Route {...props} />
}
