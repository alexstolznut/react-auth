import { v4 as uuid } from 'uuid';
import { sendEmail } from '../utils/email'
import { getDbConnection } from '../db';

export const ForgotPassword = {
    path: 'forgot-password',
    method: 'put',

    handler: async (req, res) => {
        const { email } = req.params

        const db = getDbConnection('react-auth-db');

        const result = await db.collection('users').findOne({
            email,
        });

        if(!result) return res.status(401).json({message:'The email you used is not in our database'});



    }
}
