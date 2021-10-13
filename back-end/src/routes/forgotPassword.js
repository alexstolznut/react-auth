import { v4 as uuid } from 'uuid';
import { sendEmail } from '../util/sendEmail';
import { getDbConnection } from '../db';

export const forgotPassword = {
    path: '/api/forgot-password/:email',
    method: 'put',

    handler: async (req, res) => {
        const { email } = req.params

        console.log(email);

        const db = getDbConnection('react-auth-db');

        const passwordResetCode = uuid();


        const { result } = await db.collection('users').updateOne({email}, {$set: {passwordResetCode} });

        if(result.nModified > 0) {
            console.log(process.env.FROM_EMAIL);
            try {
                await sendEmail({
                    to: email,
                    from: process.env.FROM_EMAIL,
                    subject: 'Password Reset',
                    text: `
                        To reset your password, click this link: 
                        http://localhost:3000/reset-password/${passwordResetCode}
                    `
                });
            } catch(err) {
                console.log(err);
                res.sendStatus(500);
            }
        }

        res.sendStatus(200);



    }
}
