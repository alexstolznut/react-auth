import jwt from 'jsonwebtoken';
import { getGetGoogleUser } from '../util/getGoogleUser';
import { updateUserFromOAuth } from '../util/updateUserFromOAuth';

export const googleOAuthCallback = {
    path: '/auth/google/callback',
    method: 'get',
    handler: async (req, res) => {
        const { code } = req.query;

        const oAuthUserInfo = await getGetGoogleUser({ code });
        const updatedUser = await updateUserFromOAuth({ oAuthUserInfo });

        const {_id: id, isVerified, email, info } = updatedUser;

        jwt.sign({ id, isVerified, email, info },
                process.env.JWT_SECRET,
                (err, token)=>{
                    if(err) return res.sendStatus(500);
                    res.redirect(`http://localhost:3000/login?token=${token}`);
                })
    }
}