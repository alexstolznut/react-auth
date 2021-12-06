import { getDbConnection } from '../db';

export const getArticlesRoute = {
    path:'/api/getarticles',
    method: 'get',
    handler: async (req, res) => {
        let articleArray = [];
        try {
3
            const db = getDbConnection('react-auth-db');
            const result =  await db.collection('articles').find();
            // db.collection('articles').remove();
           await result.forEach((item)=>{
               if(item===null) return;
               console.log('each', item); 
               articleArray.push({
                   userId: item.id,
                   articleId: item.articleId,
                   submissionData: item.articleSubmissionDate,
                   articleContent: item.article
               });
               
            })
            console.log(articleArray);
            return res.json(articleArray);
            // return articleArray;
        } catch(err) {
            res.status(500).json({message:err})
        }
        
    }
}