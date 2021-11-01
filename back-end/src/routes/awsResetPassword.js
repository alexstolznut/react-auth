import { CognitoUser } from 'amazon-cognito-identity-js';
import e from 'express';
import { awsUserPool } from '../util/awsUserPool';

export const awsResetPassword = {
    path: '/api/users/:passwordResetCode/aws-reset-password',
    method: 'put',
    handler: async (req, res) => {
        const { passwordResetCode } = req.params;
        const { email, newPassword } = req.body;

        new CognitoUser({ Username: email, Pool: awsUserPool})
            .confirmPassword(passwordResetCode, newPassword, {
                onSuccess: () => {
                    res.sendStatus(200);
                },
                onFailure: () => {
                    res.sendStatus(401);
                }
            })
    }
}