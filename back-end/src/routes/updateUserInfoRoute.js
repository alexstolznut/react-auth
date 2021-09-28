import { getDbConnection } from '../db';
import jwt from 'jsonwebtoken';
import {ObjectId} from 'mongodb';

export const updateUserInfoRoute = {
    path: '/api/users/:userId/updateinfo',
    method: 'put',
    handler: async (req, res) => { 
        const { authorization } = req.headers;
        const { userId } = req.params;

        const updates = (({
            favoriteFood,
            hairColor,
            bio
        }) => ({
            favoriteFood,
            hairColor,
            bio
        }))(req.body);


        

        if(!authorization) {
            return res.status(401).json({error:'no authorization header sent'});
        }

        const token = authorization.split(' ')[1];

        jwt.verify(token.trim(), process.env.JWT_SECRET, async (err, decoded)=>{
            if(err) {
                return res.status(401).json({error:'unable to verify token'});
            }

            const { id } = decoded;

            if(id !== userId) {
                return res.status(403).json({message:'not allowed to update that users data'});
            }
            
            const db = getDbConnection('react-auth-db');
            const result = await db.collection('users').findOneAndUpdate(
                {_id: ObjectId(id)},
                {$set: {info: updates}},
                {returnOriginal: false},
            );
        
        const {isVerified, email, info} = result.value;
        console.log(info);
        jwt.sign({id, email, isVerified, info}, process.env.JWT_SECRET, {expiresIn: '2d'}, (err, token)=>{
            if(err){
                return res.status(500).json({error: err})
            }
            console.log(token);
            res.status(200).json({token});
        });
        });
        

    },
}
