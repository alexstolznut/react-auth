import { testRoute } from './testRoute';
import { signupRoute } from './signupRoute';
import { loginRoute } from './loginRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPassword } from './forgotPassword';
import { resetPasswordRoute } from './resetPassword';
import { getGoogleOAuthURL } from './getGoogleOAuthURL';
import { googleOAuthCallback } from './googleOAuthCallback';
import { awsSignup } from './awsSignup';
import { awsVerifyEmail } from './awsVerifyEmail';
import { awsLogin } from './awsLogin';
import { awsForgotPassword } from './awsForgotPassword';
import { awsResetPassword } from './awsResetPassword';


export const routes = [
    testRoute,
    awsSignup,
    awsVerifyEmail,
    awsLogin,
    awsForgotPassword,
    awsResetPassword,
    loginRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    forgotPassword,
    resetPasswordRoute,
    getGoogleOAuthURL,
    googleOAuthCallback,
];
