import React, {useState} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import { useToken } from '../auth/useToken';

export default function SignupPage() {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();
    if(token) {
        history.push('/');
    }
    const onSignupClick = async() => {
        console.log('hello')
        const response = await axios.post('/api/signup', {
            email: email,
            password: password
        });

        console.log(response);

        const { token } = response.data;
        setToken(token);
        history.push(`/please-verify?email=${encodeURIComponent(email)}`)
    }
    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input 
                value={email}
                placeholder="someone@gmail.com" 
                onChange={e=>setEmail(e.target.value)}/>
            <input
                value={password}
                type="password"
                placeholder="password" 
                onChange={e=>setPassword(e.target.value)}/>
             <input
                value={confirmPassword}
                type="password"
                placeholder="confirm password" 
                onChange={e=>setConfirmPassword(e.target.value)}/>
            <hr />
            <button 
                disabled={ !email || !password || password !== confirmPassword }
                onClick={onSignupClick}>Sign Up</button>
            <button
                onClick={()=>history.push("/login")}>Already have an account? Login</button>
            
        </div>
    )
}
