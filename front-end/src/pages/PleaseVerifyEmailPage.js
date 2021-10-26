import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useQueryParams } from "../util/useQueryParams";

export const PleaseVerifyEmailPage = () => {
    const history = useHistory();
    const { email } = useQueryParams();

    useEffect(() => {
        setTimeout(() => {
            history.push(`/verify-email?email=${encodeURIComponent(email)}`);
        }, 3000)
    }, [history, email])

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