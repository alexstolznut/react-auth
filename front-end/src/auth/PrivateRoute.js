import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { useHistory } from 'react-router';
import { useToken } from './useToken';

export default function PrivateRoute(props) {
    const history = useHistory();
    const [token] = useToken();

    if (!token) return <Redirect to = "/login"/>
    return <Route {...props} />
}
