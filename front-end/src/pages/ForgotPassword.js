import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const ForgotPassword = () => {
    const [emailValue, setEmailValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    // const [newPassword, setNewPassword] = useState('');

    const history = useHistory();

    const onSubmit = async () => {
       
        try {
            const reponse = await axios.put(`/api/forgot-password/${emailValue}`);
            setSuccess(true);
            setTimeout(()=>{history.push('/login')}, 3000)
            } catch(err) {
                setErrorMessage(err.message);
            }

        }

    return success ? (
        <div className="content-container">
            <h1>Success</h1>
            <p>Check your email for a reset link.</p>
        </div>
    ) : (
        <div className="content-container">
            <h1>Forgot Password</h1>
            <p>Enter your email and we'll send you a reset link</p>
            {errorMessage && <div className="fail">{errorMessage}</div>
            }
            <input value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} 
            placeholder="John@email.com"/>
            <button disabled={!emailValue} onClick={onSubmit}>Send Reset Link</button>
        </div>
    )
}