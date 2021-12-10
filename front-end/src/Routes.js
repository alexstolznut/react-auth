import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import  { LoginPage }  from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import PrivateRoute from './auth/PrivateRoute';
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';
import { ForgotPassword } from './pages/ForgotPassword';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';
import  {ArticleEditorPage}  from './pages/ArticleEditorPage';
import {ArticleTemplatePage} from './pages/ArticleTemplatePage';

import Dashboard from './pages/Dashboard';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <ArticleEditorPage />
                </PrivateRoute>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>
                <Route path="/login" exact>
                    <LoginPage />
                </Route>
                <Route path="/signup" exact>
                    <SignupPage />
                </Route>
                <Route path="/article/:articleId" exact>
                    <ArticleTemplatePage />
                </Route>
                <Route path="/please-verify" exact>
                    <PleaseVerifyEmailPage />
                </Route>
                <Route path="/verify-email/:verificationString">
                    <EmailVerificationLandingPage />
                </Route>
                <Route path="/forgot-password" exact>
                    <ForgotPassword/>
                </Route>
                <Route path="/reset-password/:passwordResetCode">
                    <PasswordResetLandingPage />
                </Route>
            </Switch>
        </Router>
    );
}