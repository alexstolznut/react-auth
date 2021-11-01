import { CognitoUser } from 'amazon-cognito-identity-js';
import { v4 as uuid } from 'uuid';
import { awsUserPool } from '../util/awsUserPool';

export const awsForgotPassword = {
    path: '/api/aws-forgot-password/:email',
    method: 'put',
    handler: async (req, res) => {
        const { email } = req.params;

        new CognitoUser({ Username: email, Pool: awsUserPool })
        .forgotPassword({
            onSuccess: () => {
                console.log('forgot on success');
                res.sendStatus(200);
            },
            onFailure: () => {
                res.sendStatus(500);
            }
        })
    }
}