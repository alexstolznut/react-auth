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
import { uploadArticleRoute } from './uploadArticleRoute';
import { getArticlesRoute } from './getArticlesRoute';
export const routes = [
    testRoute,
    signupRoute,
    loginRoute,
    uploadArticleRoute,
    getArticlesRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    forgotPassword,
    resetPasswordRoute,
    getGoogleOAuthURL,
    googleOAuthCallback,
];
