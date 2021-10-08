import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

export const PleaseVerifyEmailPage = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 3000)
    }, [history])

    return(
        <div className="content-container">
            <h1> Thanks for Signing Up!</h1>
            <p>
                A verification email has been to your email address.
                Please verify your email to unloack features.
            </p>
        </div>
    )
}