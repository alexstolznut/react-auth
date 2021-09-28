import { useState } from 'react';
import { useUser } from './useUser';

export const useToken = () => {
    const [token, setTokenInternal] = useState(()=>{
        return localStorage.getItem('token');
    });

    const setToken = newToken => {
        localStorage.setItem('token', newToken);
        setTokenInternal(newToken);
    }
    
    return [token, setToken];
}