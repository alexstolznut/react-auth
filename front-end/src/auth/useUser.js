import { useState, useEffect } from 'react'; 
import { useToken } from './useToken';

export const useUser = () => {
    const [token] =  useToken();
    console.log('user', token);
    const getPayloadFromToken = token => {
        const encodedPayload = token.split('.')[1];
        return JSON.parse(atob(encodedPayload));
    }

    const [user, setUser] = useState(() => {
        if(!token) return null;
        return getPayloadFromToken(token);
    });


    useEffect(()=> {
        if(!token || token === null) {
            setUser(null)
        } else {
            console.log('token updated');
            setUser(getPayloadFromToken(token));
        }
    }, [token]);

    const userInfo = getPayloadFromToken(localStorage.getItem('token'));

    return user;
}