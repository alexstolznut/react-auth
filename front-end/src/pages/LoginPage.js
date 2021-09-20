import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import axios from 'axios';

export default function LoginPage() {

    

 
    const user = useUser();
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    if(user) {
        history.push('/');
    }
    const onChange = (e) => {
        if(e.target.type === 'password'){
            setPassword(e.target.value)
            console.log(e.target.value)
        } else { 
            setEmail(e.target.value);
            console.log(e.target.value)
        }
    }
    const onLoginClick = async() => {
        const response = await axios.post('/api/login',{
            email: email,
            password: password
        });

        const { token } = response.data;

        setToken(token);

        history.push('/');

    }
    return (
        <div className="content-container">
            <h1>Log In</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input 
                value={email}
                placeholder="someone@gmail.com" 
                onChange={onChange}/>
            <input
                value={password}
                type="password"
                placeholder="password" 
                onChange={onChange}/>
            <hr />
            <button 
                disable={ !email || !password }
                onClick={onLoginClick}>Log In</button>
            <button
                onClick={()=>history.push("/forgotPassword")}>Forgot your password</button>
            <button
                onClick={()=>history.push("/signup")}>Don't have an account? Sign up</button>
            
        </div>
    )
}
