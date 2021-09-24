import { useState } from 'react';

export const useToken = () => {
    console.log(localStorage.getItem('token'));
    const [token, setTokenInternal] = useState(()=>{
        return localStorage.getItem('token');
    });

    const setToken = newToken => {
        localStorage.setItem('token', newToken);
        setTokenInternal(newToken);
    }

    return [token, setToken];
}