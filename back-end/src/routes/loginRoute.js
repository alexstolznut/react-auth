
   
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const loginRoute = {
   path: '/api/login',
   method: 'post',
   handler: async (req, res) => {
       const { email, password } = req.body;
       

       const db = getDbConnection('react-auth-db');
       const user = await db.collection('users').findOne({email});
        

    
       if(!user) {
           return res.sendStatus(401);
       }

       const {_id:id, isVerified, passwordHash, info, salt} = user;
       console.log('backend',info);
       console.log(passwordHash, salt);

       const isCorrect = await bcrypt.compare(salt + password + process.env.PEPPER_STRING, passwordHash);
       console.log(process.env.JWT_SECRET, isCorrect, passwordHash);
       if(isCorrect) {
           jwt.sign({
               id, isVerified, email, info
           },
           process.env.JWT_SECRET,
           {expiresIn: '2d'},
           (err, token)=>{
               if(err) {
                   res.status(500).json({error: err});
               }
               res.status(200).json({token})
           });
       } else {
           res.json({error: 'email and password do not match'});
       } 

   }
}