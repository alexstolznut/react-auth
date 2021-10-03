import { useState } from 'react';
import { useUser } from './useUser';

export const  useToken = () => {
    const [token, setTokenInternal] = useState(()=>{
        return localStorage.getItem('token');
    });
    
   
    //Add await so only the updated token is returned
    const setToken = newToken => {
        localStorage.setItem('token', newToken);
        console.log('setToken', newToken);
        setTokenInternal(newToken);
    }

    console.log('setToken returned',token)
    return [token, setToken];
}