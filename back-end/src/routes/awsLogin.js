import jwt from 'jsonwebtoken';
import {
    AuthenticationDetails,
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser
} from 'amazon-cognito-identity-js';
import { getDbConnection } from '../db';
import { awsUserPool } from '../util/awsUserPool';

export const awsLogin = {
    path: '/api/aws-login',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;

        new CognitoUser({ Username: email, Pool: awsUserPool})
        .authenticateUser(new AuthenticationDetails({Username:email, Password: password}),{
        onSuccess: async result => {
            const db = getDbConnection('react-auth-db');
            const user = await db.collection('users').findOne({email});

            const { _id: id, isVerified, info } = user;

            jwt.sign({ id, isVerified, email, info}, process.env.JWT_SECRET, {expiresIn: '2d'}, async(err,token)=>{
                if(err) {
                    res.sendStatus(500).json(err);
                }

                res.status(200).json({token});
            })
        },
        onFailure: err => {
            res.sendStatus(401);
        }
    })
    }
}