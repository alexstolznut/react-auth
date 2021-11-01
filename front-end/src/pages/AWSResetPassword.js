import { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { PasswordResetSuccess } from './PasswordResetSuccess';
import { PasswordResetFail } from './PasswordResetFail';
import { useQueryParams } from '../util/useQueryParams';

export const AWSResetPassword = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [passwordResetCode, setPasswordResetCode] = useState('');

    const { email } = useQueryParams();

    if(isFailure) return <PasswordResetFail />
    if(isSuccess) return <PasswordResetSuccess />

    const onSubmit = async () => {
        try {
            await axios.put(`/api/users/${passwordResetCode}/aws-reset-password`, {
                email,
                newPassword: passwordValue
            });
            setIsSuccess(true);
        } catch (err) {
            console.log(err)
            setIsFailure(true);
        }
    }



    return (
        <div className="content-container">
            <h1>Reset Password</h1>
            <p>Please eneter a new password</p>
            <input 
                    value={passwordResetCode}
                    onChange={e => setPasswordResetCode(e.target.value)}
                    placeholder="Password Reset Code"
            />
            <input type='password'
                    value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}
                    placeholder="password"
            />
            <input type="password"
                    value={confirmPasswordValue}
                    onChange={e => setConfirmPasswordValue(e.target.value)}
                    placeholder="confirm password"
            />
            <button disbale={!passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue} onClick={onSubmit}>Reset Password</button>
        </div>
    )
}