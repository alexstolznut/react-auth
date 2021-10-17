import { testRoute } from './testRoute';
import { signupRoute } from './signupRoute';
import { loginRoute } from './loginRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPassword } from './forgotPassword';
import { resetPasswordRoute } from './resetPassword';
import { getGoogleOAuthURL } from './getGoogleOAuthURL';
import { googleOAuthCallback } from './googleOAuthCallback';
export const routes = [
    testRoute,
    signupRoute,
    loginRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    forgotPassword,
    resetPasswordRoute,
    getGoogleOAuthURL,
    googleOAuthCallback,
];
