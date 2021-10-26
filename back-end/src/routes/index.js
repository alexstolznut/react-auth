import { testRoute } from './testRoute';
import { signupRoute } from './signupRoute';
import { loginRoute } from './loginRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPassword } from './forgotPassword';
import { resetPasswordRoute } from './resetPassword';
import { getGoogleOAuthURL } from './getGoogleOAuthURL';
import { googleOAuthCallback } from './googleOAuthCallback';
import { awsSignupRoute } from './awsSignupRoute';
import { awsVerifyEmail } from './awsVerifyEmail';
export const routes = [
    testRoute,
    awsSignupRoute,
    loginRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    forgotPassword,
    resetPasswordRoute,
    getGoogleOAuthURL,
    googleOAuthCallback,
];
