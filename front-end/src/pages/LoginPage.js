import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import { useToken } from '../auth/useToken';
// import { useUser } from '../auth/useUser';
import axios from 'axios';

export default function LoginPage() {

    const history = useHistory();
    const tempToken  = localStorage.getItem('token');
   

 
    // const user = useUser();
    const [token, setToken] = useToken();
    if(token) {
        history.push('/');
    }
    const [errorMessage, setErrorMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [googleOAuthURL, setGoogleOAuthURL] = useState('');

    useEffect( () => {

        const loadGoogleUrl = async () => {
            try {
                const googleUrl = await axios.get('/auth/google/url');
                console.log(googleUrl.data.url);
                setGoogleOAuthURL(googleUrl.data.url);
            } catch (err) {
                console.log(err);
            }
        }

        loadGoogleUrl();
       
    }, [])

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
                disabled={ !email || !password }
                onClick={onLoginClick}>Log In
            </button>
            <button
                onClick={()=>history.push("/forgot-password")}>Forgot your password
            </button>
            <button
                onClick={()=>history.push("/signup")}>Don't have an account? Sign up
            </button>
            <button 
            disabled={!googleOAuthURL}
            onClick={()=>{window.location.href=googleOAuthURL}}>
                Log In With Google
            </button>
            
        </div>
    )
}
