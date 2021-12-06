import { getDbConnection } from '../db';
import jwt from 'jsonwebtoken';
import {ObjectId} from 'mongodb';
import {v4 as uuid} from 'uuid';

export const uploadArticleRoute = {
    path: '/api/:userId/uploadarticle',
    method: 'post',
    handler: async (req, res) => {
        console.log('hi');
        const {authorization} = req.headers;
        console.log(authorization)
        const {userId} = req.params;
        const { article } = req.body;
        const articleSubmissionDate = new Date().toISOString();


        if(!authorization) {
            console.log('fail');
            return res.status(404).json({message:'unauthorizaed user'})
        }
       
        const token = authorization.split(' ')[1];
        console.log(token);
       
        jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
            if(err) {
                return res.status(401).json({error:'unable to verify token'});
            }

            const {id} = decoded;
            console.log('inside verify');
            if(id!==userId) {
                return res.status(403).json({message: `not allowed to update this user's data`});
            }
            const articleId = uuid();
            const db = getDbConnection('react-auth-db');
            const articleInfo = {
                id, articleId, articleSubmissionDate, article
            };
            const result = await db.collection('articles').insertOne(articleInfo);

            const articleResults = await db.collection('articles').find();
            console.log(articleResults);
            // console.log(result);
            console.log('the end');
        
            jwt.sign({id, articleId, articleSubmissionDate, article}, process.env.JWT_SECRET, {expiresIn: '2d'}, (err, token)=>{
                if(err){
                    return res.status(500).json({error: err})
                }
                console.log(token);
                res.status(200).json({token});
            });


        });

        





    }
};